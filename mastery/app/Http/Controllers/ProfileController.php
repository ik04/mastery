<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Models\Profile;
use Illuminate\Http\Request;

// 'image',
// 'email',
// 'name',
// 'age',
// 'username',
// 'Bio'

class ProfileController extends Controller
{
    public function create_profile(Request $request){
        if($request->has('image')){
            $image = $request->file('image');
            $img_name = time().'.'.$image->getClientOriginalExtension();
            Storage::disk('public')->put($img_name,file_get_contents($image));
            // Profile::create(['name'=>$name]);
            $url = Storage::url($img_name);
            return response()->json(['success'=>$url]);
            
            $fields = $request->validate([
                'name' =>'required|string',
                'age' =>'required|integer',
                'username' =>'required|string',
                'bio' =>'string',
            ]);
            $profile = Profile::create([
                'name' => $fields['name'],
                'age' =>$fields['age'],
                'username' =>$fields['username'],
                'bio' =>$fields['bio'],
                'Profile_image'=>[$url]
            ]);
            
            $response = [
                'profile' => $profile,
                
            ];
            return response()->json(['success'=>$response]);
        }
            
        else{
            return response()->json('plz try again');
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