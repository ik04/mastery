<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'email' =>'required|string|unique:users',
            'password' =>'required|string|confirmed',
        ]);
        $user = User::create([
            'email' => $fields['email'],
            'password' =>Hash::make($fields['password'])

        ]);
        $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response()->json($response,201)->withCookie(cookie()->forever('at',$token));

    }
    public function login(Request $request){


        $fields = $request->validate([
            'email' =>'required|string',
            'password' =>'required|string',
        ]);
        $user = User::where('email',$fields['email'])->first();

        if(!$user || !Hash::check($fields['password'],$user->password)){
            return response(
                [
                    'message' => 'invalid credentials'

                ]
                );
        }else{
            $token = $user->createToken('myapptoken')->plainTextToken;
            $response = [
                'user' => $user,
                'token' => $token
            ];
            return response()->json($response,201)->withCookie(cookie()->forever('at',$token));

        }
    }

    public function getdata(Request $request){
        if(!$request->hasCookie("at")){
            return response()->json([
                'message' => "Unauthenticates1"
            ],401);
        }
        if($token = \Laravel\Sanctum\PersonalAccessToken::findToken($request->cookie("at"))){

            $user = $token->tokenable;
        }
        else{
            return response()->json([
                'message' => "unauthenticated"
            ]);
        }
        if(is_null($user)){
            return response()->json([
                'message' => "Unauthenticates2"
            ],401);
        }
        return response() -> json([
            'email' => $user->email,
            'access_token' => $request -> cookie('at')
        ]);
    }
}