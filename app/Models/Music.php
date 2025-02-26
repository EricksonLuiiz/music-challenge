<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    protected $table = 'music';

    protected $fillable = ['title', 'artist', 'album', 'isrc', 'platform', 'trackId', 'duration', 'addedDate', 'addedBy', 'url'];

    protected $hidden = ['isrc', 'trackId', 'trackId', 'addedDate', 'addedBy'];

    public function users(){
      return $this->belongsToMany(User::class, 'users_music', 'music_id', 'user_id');
    }

}
