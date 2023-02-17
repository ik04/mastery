<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Models\Profile;
use Illuminate\Http\Request;



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

    public function get_profile(Request $request){

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
            return response()->json($response,200);
        }
        
    }
    
    
    
}
//Todo
/*
1)implement other properties
2)perfect image upload and display       done
3)redirect to a page  
4)look up migration docs    done
5)clean code and refactor
6)better frontend 
*/ 