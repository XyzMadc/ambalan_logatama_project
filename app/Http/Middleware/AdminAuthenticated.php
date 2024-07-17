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
            //cek afakah user role nya admin
            if(Auth::guard('admins')->user()->role=='admin'){
                return $next($request);
            }
            //klo bukan admin tidak boleh
             Auth::guard('admins')->logout();
             return redirect('admin-logatama/login')->with('error', 'Unauthorized access. Only Admin!');
        }

       
        return redirect('/admin-logatama/login'); 
    }
}
