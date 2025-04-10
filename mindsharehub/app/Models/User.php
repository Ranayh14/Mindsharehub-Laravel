<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'username', 'email', 'pass', 'roles', 'is_banned', 'ban_reason', 'ban_date', 'profile_picture', 'progress_percentage'
    ];

    protected $hidden = ['pass'];

    public function contents() {
        return $this->hasMany(Content::class);
    }

    public function posts() {
        return $this->hasMany(Post::class);
    }

    public function notifications() {
        return $this->hasMany(Notification::class);
    }

    public function diaries() {
        return $this->hasMany(Diary::class);
    }

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function audioNotes() {
        return $this->hasMany(AudioNote::class);
    }

    public function likedPosts() {
        return $this->belongsToMany(Post::class, 'post_likes');
    }

    public function likedComments() {
        return $this->belongsToMany(Comment::class, 'comment_likes');
    }
}
