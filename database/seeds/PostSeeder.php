<?php

use Illuminate\Database\Seeder;


class PostSeeder extends Seeder
{
    public function run()
    {
        factory(App\Post::class, 10)->create();
    }
}
