<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

use App\User;

class Question extends Model
{
    protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];
   // protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    //each question is asked by a user
    /**
     * Get the user that owns the Question
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // A question can have many replies
    /**
     * Get all of the replies for the Question
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function replies()
    {
        return $this->hasMany(Reply::class)->orderBy('id', 'Desc');
    }

    // A question can only have one category
    /**
     * Get the category that owns the Question
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getPathAttribute()
    {
        //define the full-path http://localhost:8000/api/question/this-title
        //return asset("api/question/$this->slug");

        // define the slug only api/question/this-title
        return "question/$this->slug";
    }
}
