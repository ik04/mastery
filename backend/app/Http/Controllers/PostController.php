<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Profile;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{

    public function index(Request $request){
        return response("works!",200);
    }
    public function createPost(Request $request){
        $validation = Validator::make($request->all(), [
        "title"=>"required|string",
        "description"=>"required|string",
        "username"=>"required|string",
        "profile_pic"=>"string",
        "uuid"=>"string",
        "date"=>"date_format:m/d/Y",
        "time"=>"date_format:H:i",
        ]);

        if ($validation->fails()) {
            return response()->json([
                "errors" => $validation->errors()
            ],400);
        }
        $validated = $validation->validated(); 
        $profile_pic = Profile::select('image')->where('username',$validated['username'])->get();
        $image =  $profile_pic[0];
        $image = $image['image'];
        // echo $image;
        // date_default_timezone_set('India/Chennai');
        $post = Post::create(["title"=>$validated["title"],
        "description"=>$validated["description"],
        "uuid"=>uniqid(),
        "username"=>$validated["username"],
        "profile_pic"=>$image,
        "date"=>date('m/d/Y'),
        "time"=>date('H:i',time()),]);
        return response()->json($post,201);
    }

    public function getAllPosts(Request $request){
        $posts = Post::select("title","description","username","uuid","date","profile_pic")->get();
        return response()->json($posts,200);
    }
    public function getUserPosts(Request $request){
        $fields = $request->validate([
            'username' =>'string',
        ]);
        $posts = Post::select("title","description","username","uuid","date","time",)->where("username",$fields["username"])->get();
        return response()->json($posts,200);
       
    }
}