<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticated
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guard('peserta')->check()) {
            //cek afakah user role nya admin
            if(Auth::guard('peserta')->user()->role=='admin'){
                return $next($request);
            }
            //klo bukan admin tidak boleh
             Auth::guard('peserta')->logout();
             return redirect('admin-logatama/login')->with('error', 'Unauthorized access. Only Admin!');
        }

       
        return redirect('/admin-logatama/login'); 
    }
}
