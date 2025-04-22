<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $posts = Post::with([
                'user:id,username,profile_picture',
                'likedUsers:id',
                'comments' => fn ($q) => $q->latest()->take(3)->with('user:id,username,profile_picture'),
            ])
            ->withCount('comments')
            ->latest()
            ->paginate(10)
            ->through(fn ($p) => $p->append([
                'is_liked',
                'created_at_human',
                'total_comments',
            ]));
    
        return Inertia::render('Dashboard/User', [
            'posts' => $posts,
        ]);
    }    
}
