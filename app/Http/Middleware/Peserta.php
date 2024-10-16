<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Peserta
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guard('peserta')->check()) {
            //cek afakah user role nya peserta
            if(Auth::guard('peserta')->user()->role=='peserta'){
                return $next($request);
            }
            //klo bukan admin tidak boleh
             Auth::guard('peserta')->logout();
             return redirect('/login-soal')->with('error', 'Unauthorized access. Only Peserta!');
        }


        return redirect('/login-soal');
    }
}
