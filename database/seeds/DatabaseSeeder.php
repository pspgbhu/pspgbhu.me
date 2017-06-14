<?php

use Illuminate\Database\Seeder;

// class DatabaseSeeder extends Seeder
// {
//     /**
//      * Run the database seeds.
//      *
//      * @return void
//      */
//     public function run()
//     {
//         $this->call(PostSeeder::class);
//     }
// }


class PostSeeder extends Seeder
{
    public function run()
    {
        factory(App\Post::class, 10)->create();
    }
}
