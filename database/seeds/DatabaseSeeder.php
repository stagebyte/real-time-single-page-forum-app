<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Model\Category;
use App\Model\Question;
use App\Model\Reply;
use App\Model\Like;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        //create 10 users
        factory(User::class, 10)->create();
        //create 5 categories
        factory(Category::class, 5)->create();
        //create 10 questions
        factory(Question::class, 10)->create();
        //create 50 replies
        factory(Reply::class, 50)->create()->each(function ($reply) {
            // make each user like a reply.
            return $reply->like()->save(factory(Like::class)->make());
        });
    }
}
