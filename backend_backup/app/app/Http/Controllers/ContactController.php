<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactFormMail;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Save to database
            $contact = Contact::create([
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            // Send email notification
            Mail::to('yabetsd29@gmail.com')->send(new ContactFormMail($contact));

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message! I will get back to you soon.'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again later.'
            ], 500);
        }
    }

    public function index()
    {
        // Get all contact messages (for admin panel)
        $contacts = Contact::orderBy('created_at', 'desc')->paginate(20);
        
        return response()->json([
            'success' => true,
            'data' => $contacts
        ]);
    }

    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        
        // Mark as read
        $contact->update(['is_read' => true]);
        
        return response()->json([
            'success' => true,
            'data' => $contact
        ]);
    }
}