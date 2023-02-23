<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Models\Profile;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class ProfileController extends Controller
{
    public function create_profile(Request $request){
        if($request->has('image')){
            $image = $request->file('image');
            $img_name = time().'.'.$image->getClientOriginalExtension();
            Storage::disk('public')->put($img_name,file_get_contents($image));
            $url = Storage::url($img_name);
        }
        else{
            return response()->json('image issue');
        }

        
            $fields = $request->validate([
                'email' =>'string', 
                'name' =>'required|string',
                'age' =>'required|integer',
                'username' =>'required|string',
                'Bio' =>'string',
                'image' => 'mimes:png,jpg,jpeg',
                'profile_created' =>'boolean'
            ]);
            $profile = Profile::create([
                'email' => $fields['email'],
                'name' => $fields['name'],
                'age' =>$fields['age'],
                'username' =>$fields['username'],
                'Bio' =>$fields['Bio'],
                'image'=>$url,
                'profile_created'=>true
            ]);
            return response()->json(['success'=>$profile]);
            
    }

    public function check_profile(Request $request){

        $fields = $request->validate([
            'email' =>'required|string',
        ]);
        $profile = Profile::where('email',$fields['email'])->first();

        if(!$profile){
            return response(
                [
                    'message' => 'profile has not been created'

                ],404
                );
        }else{
           
            $response = [
                'profile' => $profile,
                
            ];
            return response()->json($response,200); // will check profile_created in nextjs
        }
        
    }
    
    public function get_profile_data(Request $request){
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
                'message' => "unset or invalid token"
            ],202);
        }
        if(is_null($user)){
            return response()->json([
                'message' => "user is null"
            ],401);
        }
        return response() -> json(
            $profile = Profile::where('email',$user->email)->first(),
        );
    }
    
    public function search_user(Request $request){
        if($request->has('search')){
            $fields = $request->validate([
                'search' =>'string',
            ]);
            if(isEmpty($fields['search'])){
                $users = Profile::select('image','name','username')->get();
                return response()->json($users,200);
            }elseif($fields['search']->isNot()){
                $users = Profile::select('image','name','username')->where('name','username')->like($fields["search"]);
                return response()->json($users,200);

            }else{
                return response()->json("an error has occured",500);
            }
        }
    }
    
}
//Todo
/*
1)implement other properties
2)perfect image upload and display       done
3)redirect to a page     done
4)look up migration docs    done
5)clean code and refactor
6)better frontend 
7) work on security flaws
*/ 