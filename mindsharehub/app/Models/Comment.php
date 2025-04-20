<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_id', 'user_id', 'parent_id', 'comment', 'likes'
    ];

    public function post() {
        return $this->belongsTo(Post::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function parent() {
        return $this->belongsTo(Comment::class, 'parent_id');
    }

    public function likes() {
        return $this->hasMany(CommentLike::class);
    }

    public function reports() {
        return $this->hasMany(CommentReport::class);
    }
}
