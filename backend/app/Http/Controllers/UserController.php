<?php

namespace App\Http\Controllers;

use App\Models\UserGoogle;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function login(Request $request)
    {
        $login = $request->only(['email', 'username', 'emailVerified', 'profileImage']);

        $response = $this->userService->verifyGoogleLogin($login);

        return response()->json($response['data'], $response['status']);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return "show function done!";
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
