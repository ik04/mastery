<?php

namespace App\Http\Controllers;

use App\Models\Post;
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
        "uuid"=>"string",
        "username"=>"required|string",
        "date"=>"required|date_format:m/d/Y",
        "time"=>"required|date_format:H:i",
        ]);

        if ($validation->fails()) {
            return response()->json([
                "errors" => $validation->errors()
            ]);
        }
        $validated = $validation->validated(); 
        
        $post = Post::create(["title"=>$validated["title"],
        "description"=>$validated["description"],
        "uuid"=>uniqid(),
        "username"=>$validated["username"],
        "date"=>$validated["date"],
        "time"=>$validated["time"],]);
        return response()->json($post,201);

    }
}