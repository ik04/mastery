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
            'email' =>'required|string|exists:users',
            'password' =>'required|string',
        ]);
        $user = User::where('email',$fields['email'])->first();
        if(!Hash::check($fields['password'],$user->password)){
            return response()->json(
                [
                    'message' => 'invalid credentials'

                ]
                );
        }
        
            $token = $user->createToken('myapptoken')->plainTextToken;
            $response = [
                'user' => $user,
                'token' => $token
            ];
            return response()->json($response,201)->withCookie(cookie()->forever('at',$token));

        
    }

    public function getData(Request $request){
        if(!$request->hasCookie("at")){
            return response()->json([
                'message' => "Unauthenticated"
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
                'message' => "Unauthenticated"
            ],401);
        }
        return response() -> json([
            'email' => $user->email,
            'access_token' => $request -> cookie('at')
        ]);
    }

    
    public function loginTokenCheck(Request $request){
        if(!$request->hasCookie("at")){
            return response()->json([
                'message' => "token not found"
            ],401);
        }
        if($token = \Laravel\Sanctum\PersonalAccessToken::findToken($request->cookie("at"))){
            $user = $token->tokenable;
        }
        else{
            return response()->json([
                'message' => "invalid token"
            ],401);
        }
        return response()->noContent();
    }

    public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();
        $response =  [
            'message' => 'logged out'
        ];
        return response($response,200);

    }

    
}





/*
TODO:
1)getting cookie to the api route for running the method done
2)make method to verify token and thus confirm login done

*/