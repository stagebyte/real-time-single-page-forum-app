<?php

use Faker\Generator as Faker;
use App\User;

$factory->define(App\Model\Like::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            //return \App\User::all()->random();
            return User::all()->random();
        },
    ];
});
