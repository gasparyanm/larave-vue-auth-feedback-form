<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         User::create([
             'name'     => 'John',
             'email'    => 'john@manager.com',
             'password' => '123456',
             'type'     => User::TYPE_MANAGER
         ]);
    }
}
