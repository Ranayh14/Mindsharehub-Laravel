<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = ['post_id', 'reported_by', 'reason', 'description', 'status'];

    public function post() {
        return $this->belongsTo(Post::class);
    }

    public function reporter() {
        return $this->belongsTo(User::class, 'reported_by');
    }
}
