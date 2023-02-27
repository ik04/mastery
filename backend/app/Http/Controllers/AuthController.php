<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        
         /**
         * 25th February, 2023 1:36pm (IST)
         * Wellick
         *
         * Code with validator facade
         * finished
         */
        
        $validation = Validator::make($request->all(), [
            'email' =>'required|string|unique:users',
            'password' =>'required|string|confirmed',
        ]);
        
        if ($validation->fails()) {
            return response()->json([
                "errors" => $validation->errors()
                //  If you want to return ONLY ONE error then,
                // "error" => $validation->errors()->first()
            ]);
        }
        $validated = $validation->validated(); 
        
    
        $user = User::create([
            'email' => $validated['email'],
            'password' =>Hash::make($validated['password'])

        ]);
        $token = $user->createToken('myapptoken')->plainTextToken;
        return response()->json([
            'user' => $user,
            'token' => $token
        ],201)->withCookie(cookie()->forever('at',$token));

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

    public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();
        $response =  [
            'message' => 'logged out'
        ];
        return response($response,200);

    }

    
}

/*


*/