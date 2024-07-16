<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticated
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guard('admins')->check()) {
             return $next($request);
        }

       
        return redirect('/admin-logatama/login'); // Replace with your custom route
    }
}
