<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Validator;

class MailController
{
    //
    public function contact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:500',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    

        if (Mail::to(env('MAIL_TO'))->send(new ContactMail($request->input('name'), $request->input('email'), $request->input('message')))) {
            // Email sent successfully
            // return response()->json(['message' => 'Form submitted successfully'], 200);
            return redirect()->route('contact')->with('success', 'Message sent successfully!');
        } else {
            // Handle if no email was sent (e.g., log or redirect with error message)
            return redirect()->route('contact')->with('error', 'Failed to send email.');
        }
    }
}
