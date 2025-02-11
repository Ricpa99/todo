<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use SebastianBergmann\Type\TrueType;

class HomeController extends Controller
{
    public function destroy(Blog $blog){
        Blog::destroy($blog->id);
        return back()->with('message', 'Data berhasil di delete');
    }

    public function updateComplete(Request $request, Blog $blog){
        $validate = $request->validate([
            "is_complete" => 'boolean'
        ]);

        Blog::where('id', $request->id)->update($validate);
        return back()->with('message', 'Data success update');
    }
    public function update(Request $request, Blog $blog){
        $validate = $request->validate([
            'name' => 'required|min:4|max:50'
        ],
        [
            'name.required' => 'nama tidak bole kosong',
            'name.min' => 'min name 4 karakter',
            'name.max' => 'max name 50 karkter'
        ]);
        
        Blog::where('id', $request->id)->update($validate);
        return redirect()->back()->with('message', 'Data berhasil di update');

    }

    public function edit(Blog $blog){
        return Inertia::render('Edit', [
            'title' => "Edit",
            'respon' => $blog
        ]);
    }

    public function todo(){
        return Inertia::render('Blog', [
            'title' => 'Todo',
            'blogs' => Blog::latest()->paginate(2)
        ]);
    }

    public function dashboard(){
        return Inertia::render('Dashboardd', [
            'title' => 'Dashboard'
        ]);
    }

    public function login(){
        return Inertia::render('Auth/Login', [
            'title' => 'Login',
            'status' => 'berhasil login'
        ]);
    }

    public function store(Request $request){
        return Inertia::render('');
    }
}
