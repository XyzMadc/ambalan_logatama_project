<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Validator;

class AmbalanController
{
    function index(){
        return Inertia::render('BerandaAmbalan/index');
    }

    function tentang(){
        return Inertia::render('Tentang/index');
    }

    function kontak(){
        return Inertia::render('Kontak/index');
    }

    function kegiatan(){
        return Inertia::render('Kegiatan/index');
    }

    public function email(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    

        if (Mail::to('officialbakuls@gmail.com')->send(new ContactMail($request->input('name'), $request->input('email'), $request->input('message')))) {
            return redirect()->route('kontak')->with('success', 'Message sent successfully!');
        } else {
            return redirect()->route('kontak')->with('error', 'Failed to send email.');
        }
    }
}
