<?php

namespace App\Http\Controllers;

use App\Models\blog;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Auth/Login', [
            'test' => 'myblog'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {      

        // return $request->all();
        $validated = $request->validate([
            'name' => 'required|min:2|max:15|string',
            'is_complete' => ''
        ],
        [
            'name.string' => 'tidak bole angka',
            'name.required' => 'nama tidak bole kosong',
            'name.min'  => 'min 2 karakter',
            'name.max' => 'max 15 karakter',
        ]
        );

        Blog::create($validated);
        return back()->with('message', 'Data berhasil dimasukkan');
    
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
