<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'content' => 'required|string|max:3000',
            'image'   => 'nullable|image|max:4096',
        ]);

        $post = $request->user()->posts()->create(['content' => $data['content']]);

        if ($request->file('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            $post->update(['image_path' => $path]);
        }

        return Inertia::render('Dashboard/User', [
            'posts' => Post::with(['user:id,username,profile_picture'])->latest()->paginate(10),
        ]);
    }

    public function destroy(Post $post)
    {
        Gate::authorize('delete', $post);

        if ($post->image_path) {
            Storage::disk('public')->delete($post->image_path);
        }
        $post->delete();

        return Inertia::render('Dashboard/User', [
            'posts' => Post::with(['user:id,username,profile_picture'])->latest()->paginate(10),
        ]);
    }

    public function toggleLike(Post $post)
    {
        $user = request()->user();
        $post->likedUsers()->toggle($user);

        $likes = $post->likedUsers()->count();
        $post->updateQuietly(['likes_count' => $likes]);

        return Inertia::render('Dashboard/User', [
            'posts' => Post::with([
                'user:id,username,profile_picture',
                'likedUsers:id',
                'comments' => fn ($q) => $q->with([
                    'user:id,username,profile_picture',
                    'likedUsers:id',
                ])->latest(),
            ])
            ->withCount('comments')
            ->latest()
            ->paginate(10)
            ->through(fn ($p) => $p->append(['is_liked','created_at_human'])),
        ]);
    }

    public function update(Request $r, Post $post)
    {
        // Gunakan Gate untuk mengecek apakah user berhak mengedit post
        Gate::authorize('update', $post);
    
        // Lanjutkan dengan logika update
        $data = $r->validate([
            'content' => 'required|string|max:3000',
            'image'   => 'nullable|image|max:4096',
        ]);
    
        $post->update(['content' => $data['content']]);
    
        if ($r->file('image')) {
            if ($post->image_path) Storage::disk('public')->delete($post->image_path);
            $path = $r->file('image')->store('uploads', 'public');
            $post->update(['image_path' => $path]);
        }
        return response()->json($post); 
    }    
}
