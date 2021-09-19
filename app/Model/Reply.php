<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

use App\User;

class Reply extends Model
{
    protected $fillable = ['body','question_id','user_id'];
    //every reply falls under a question
    public function question()
    {
        return $this->belongsTo(Question::class);

    }

    // each user has a reply
    public function user()
    {
        return $this->belongsTo(User::class);

    }

    // each reply has many likes
    public function like()
    {
        return $this->HasMany(Like::class);

    }
}
