<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class CommentController extends Controller
{
    /* ─────────────────── CREATE ─────────────────── */
    public function store(Request $request)
    {
        $data = $request->validate([
            'post_id'   => 'required|exists:posts,id',
            'comment'   => 'required|string|max:2000',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $comment = Comment::create([
            'post_id'   => $data['post_id'],
            'user_id'   => $request->user()->id,
            'comment'   => $data['comment'],
            'parent_id' => $data['parent_id'] ?? null,
        ]);

        return response()->json([
            'status'  => 'success',
            'comment' => $comment
                ->load('user:id,username,profile_picture')
                ->append(['is_liked', 'total_likes', 'created_at_human']),
        ]);
    }

    /* ─────────────────── UPDATE ─────────────────── */
    public function update(Request $request, Comment $comment)
    {
        Gate::authorize('update', $comment);

        $comment->update(
            $request->validate(['comment' => 'required|string|max:2000'])
        );

        return response()->json(['status' => 'success']);
    }

    /* ─────────────────── DELETE ─────────────────── */
    public function destroy(Comment $comment)
    {
        Gate::authorize('delete', $comment);

        $comment->delete();

        return response()->json(['status' => 'success']);
    }

    /* ─────────────────── LIKE / UNLIKE ─────────────────── */
    public function toggleLike(Comment $comment)
    {
        Gate::authorize('like', $comment);   // policy memastikan tidak like komentar sendiri

        $user = request()->user();
        $comment->likedUsers()->toggle($user);            // belongsToMany toggle
        $likes = $comment->likedUsers()->count();         // hitung ulang

        // opsional: simpan counter ke kolom likes_count jika ada
        if ($comment->isFillable('likes_count')) {
            $comment->updateQuietly(['likes_count' => $likes]);
        }

        return response()->json([
            'status'      => $comment->likedUsers->contains($user) ? 'liked' : 'unliked',
            'total_likes' => $likes,
        ]);
    }
}
