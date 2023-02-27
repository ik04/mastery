<?php

/**
* 25th February, 2023 1:49pm (IST)
* Wellick
*
* TODO: Make UserController.php and shift the entire logic of this controller to UserController
* TODO: Merge profile and users table into same table called "users"
*/

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Models\Profile;
use Exception;
use Hamcrest\Core\IsEqual;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProfileController extends Controller
{
    
    public function createProfile(Request $request){
         /**
          * 25th February, 2023 1:40pm (IST)
          * Wellick
          *
          * Validating image
          */

        
        $validation = Validator::make($request->all(), [
               'email' =>'string', 
                'name' =>'required|string',
                'age' =>'required|integer',
                'username' =>'required|string|unique:profiles',
                'Bio' =>'string',
                'image' => 'mimes:png,jpg,jpeg',
                'profile_created' =>'boolean',
        ]);
        
        if ($validation->fails()) {
            return response()->json($validation->errors()->all(),400);
        }
        
        
        if($request->has('image')){
            $image = $request->file('image');
            $img_name = time().'.'.$image->getClientOriginalExtension();
            Storage::disk('public')->put($img_name,file_get_contents($image));
            $url = Storage::url($img_name);
        }
        else{
            return response()->json('image issue');
        }


        // * The validation has been made on the top
        // * Uncomment that and then delete this validation
        //! old code 
            // $fields = $request->validate([
            //     'email' =>'string', 
            //     'name' =>'required|string',
            //     'age' =>'required|integer',
            //     'username' =>'required|string|unique:profiles',
            //     'Bio' =>'string',
            //     'image' => 'mimes:png,jpg,jpeg',
            //     'profile_created' =>'boolean'
            // ]);
            $validated = $validation->validated();
            $profile = Profile::create([
                'email' => $validated['email'],
                'name' => $validated['name'],
                'age' =>$validated['age'],
                'username' =>$validated['username'],
                'Bio' =>$validated['Bio'],
                'image'=>$url,
                'profile_created'=>true // * Consider removing this from the table / database
                //TODO: will make a new schema for table including exitsing table
            ]);
        
            return response()->json([
                $profile
            ], 201);
    }

    public function checkProfile(Request $request){

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
    
    public function getProfileData(Request $request){
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
    
    public function searchUser(Request $request){
        try{
            
            $fields = $request->validate([
                'search' =>'string',
            ]);
            if($request->has('search')){
               
                $users = Profile::select('image','name','username')->where('name','LIKE','%'.$fields['search'].'%')->orWhere('username','LIKE','%'.$fields['search'].'%')->get();
                // $users = Profile::select('image','name','username')->where(['name','LIKE','%'.$fields['search'].'%'],['username','LIKE','%'.$fields['search'].'%'])->get();
                return response()->json($users,200);
                
                
            }else{
                $users = Profile::select('image','name','username')->limit(8)->get();
                return response()->json($users,200);
                // return response()->json("an error has occured",500);
            }
        }catch(Exception $e){
            return response($e->getMessage(),500);
        }
        
        }

        
    public function searchResult(Request $request){
        try{
            
            $fields = $request->validate([
                'username' =>'required|string',
            ]);
            
                $users = Profile::select('image','name','username','Bio','age')->where('username',$fields['username'])->get();
                return response()->json($users,200);
        }catch(Exception $e){
            return response($e->getMessage(),500);
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