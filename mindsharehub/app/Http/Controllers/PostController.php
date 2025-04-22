<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

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

        return back()->with('flash.success', 'Postingan berhasil dibuat.');
    }

    public function destroy(Post $post)
    {
        Gate::authorize('delete', $post);

        if ($post->image_path) {
            Storage::disk('public')->delete($post->image_path);
        }
        $post->delete();

        return back()->with('flash.success', 'Postingan dihapus.');
    }

    public function toggleLike(Post $post)
    {
        try {
            $user = request()->user();
            $post->likedUsers()->toggle($user);  // Toggle like status
    
            // Hitung ulang jumlah likes
            $likes = $post->likedUsers()->count();
    
            // Hitung jumlah komentar
            $totalComments = $post->comments()->count();
    
            // Update jumlah likes jika ada kolom likes_count
            if ($post->isFillable('likes_count')) {
                $post->updateQuietly(['likes_count' => $likes]);
            }
    
            return response()->json([
                'status'        => $post->likedUsers->contains($user) ? 'liked' : 'unliked',
                'likes_count'   => $likes,
                'total_comments' => $totalComments,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }    
}
