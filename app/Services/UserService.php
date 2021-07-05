<?php

namespace App\Services;

use App\Models\User;
use App\Repository\UserRepositoryInterface;

class UserService
{
    private UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function registerUser(array $attributes): User
    {
        return $this->userRepository->create($attributes);
    }

    public function getCurrentUser(): User
    {
        return $this->userRepository->find(auth()->id());
    }
}
