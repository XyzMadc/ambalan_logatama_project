<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Validator;

class AmbalanController
{
    function index()
    {
        return Inertia::render('BerandaAmbalan/index');
    }

    function tentang()
    {
        return Inertia::render('Tentang/index');
    }

    function kontak()
    {
        return Inertia::render('Kontak/index');
    }

    function kegiatan()
    {
        return Inertia::render('Kegiatan/index');
    }

    public function email(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:500',
        ]);

        if ($validated) {
            $name = $request->input('name');
            $email = $request->input('email');
            $message = $request->input('message');
            $response = [
                'name' => $name,
                'email' => $email,
                'message' => $message,
            ];
            Mail::to('officialbakuls@gmail.com')->send(new ContactMail($response['name'], $response['email'], $response['message']));
        }
    }
}
