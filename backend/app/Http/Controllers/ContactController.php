<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactReply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        // Require admin token to list contacts
        $token = request()->header('X-ADMIN-TOKEN') ?? request()->bearerToken();
        if (!$token || $token !== env('ADMIN_API_TOKEN')) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return response()->json(Contact::orderBy('created_at', 'desc')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'nullable|string',
        ]);

        $contact = Contact::create($data + ['status' => 'unread']);

        return response()->json(['message' => 'Message received', 'data' => $contact], 201);
    }

    public function reply(Request $request, $id)
    {
        // Require admin token to send a reply
        $token = $request->header('X-ADMIN-TOKEN') ?? $request->bearerToken();
        if (!$token || $token !== env('ADMIN_API_TOKEN')) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $contact = Contact::findOrFail($id);

        $data = $request->validate([
            'subject' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        try {
            Mail::to($contact->email)->send(new ContactReply($contact, $data['subject'], $data['body']));
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to send reply', 'error' => $e->getMessage()], 500);
        }

        $contact->status = 'responded';
        $contact->responded_at = now();
        $contact->save();

        return response()->json(['message' => 'Reply sent', 'data' => $contact]);
    }
}
