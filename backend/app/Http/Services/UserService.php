<?php

namespace App\Services;

use App\Models\User;
use Firebase\JWT\JWT;

class UserService
{
    public function verifyGoogleLogin($login)
    {
        $email = $login['email'];
        $emailVerified = $login['emailVerified'];

        if ($emailVerified === 'false') {
            return ['status' => 400, 'data' => ['error' => 'invalid_data']];
        }

        $user = User::where('email', $email)->first();

        if (!$user) {
            $user = User::create([
                'username' => $login['username'],
                'email' => $email,
                'email_verified' => $emailVerified,
            ]);
        }

        $token = $this->tokenBuilder($user->id, $user->role, $user->email);

        return ['status' => 200, 'data' => $token];
    }

    protected function tokenBuilder($sub, $role, $email)
    {
        $payload = ['sub' => $sub, 'role' => $role, 'email' => $email];
        $secret = 'Z99NeqPvSWEu3O65zQu9Du70rC0eU0hOrglS4JxXYSf7RWhXyeC8vL7gxUaQmCUM';

        $token = JWT::encode($payload, $secret, 'HS256');

        return ['token' => $token];
    }
}
