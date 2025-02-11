<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[IndexController::class, 'index']);
Route::get('/masuk', [HomeController::class, 'login'])->name('login');
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::middleware('auth')->group(function(){
    Route::get('/todo', [HomeController::class, 'todo'])->name('blog');
    Route::get('/blog/edit/{blog}', [HomeController::class, 'edit'])->name('blog.edit');
    Route::get('/dashboard',[HomeController::class, 'dashboard'])->name('dashboard');
    Route::post('/storedata', [IndexController::class, 'store'])->name('store.data');
    Route::patch('/update/{id}', [HomeController::class, 'update'])->name('blog.update');
    Route::patch('/update-complete/{id}', [HomeController::class, 'updateComplete'])->name('blog.complete');
    Route::delete('/blog-delete/{blog}', [HomeController::class, 'destroy'])->name('blog.destroy');
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
