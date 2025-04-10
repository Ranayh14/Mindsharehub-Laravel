<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AudioNote extends Model
{
    protected $table = 'audio_notes';

    protected $fillable = ['user_id', 'file_name', 'created_at'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public $timestamps = false;
}

