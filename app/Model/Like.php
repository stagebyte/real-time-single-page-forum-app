<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    //protected $guarded = [];
    protected $guarded = ['reply_id', 'user_id'];
}
