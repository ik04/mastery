<?php

namespace App\Http\Controllers;

use App\Models\Post;
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
        
        $post = Post::create(["title"=>$validated["title"],
        "description"=>$validated["description"],
        "uuid"=>uniqid(),
        "username"=>$validated["username"],
        "date"=>date('m/d/Y'),
        "time"=>date('H:i'),]);
        return response()->json($post,201);
    }

    public function getAllPosts(Request $request){
        $posts = Post::select("title","description","uuid","date","time",)->get();
        return response()->json($posts,200);
       
    }
}