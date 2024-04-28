<?php

namespace App\Http\Controllers;

use App\Models\UserGoogle;
use Illuminate\Http\Request;

class UserController extends Controller
{
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
        $user = new UserGoogle;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->email_verified = $request->input('email_verified');

        if( $user->save()){
            return $user;
        }
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
