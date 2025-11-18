<?php

namespace App\Http\Controllers;

use App\Models\HiringRequest;
use App\Mail\HiringRequestAccepted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HiringRequestController extends Controller
{
    public function index()
    {
        // Require admin token to list hiring requests
        $token = request()->header('X-ADMIN-TOKEN') ?? request()->bearerToken();
        if (!$token || $token !== env('ADMIN_API_TOKEN')) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return response()->json(HiringRequest::orderBy('created_at', 'desc')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'role' => 'nullable|string|max:255',
            'budget' => 'nullable|string|max:255',
            'message' => 'nullable|string',
        ]);

        $hr = HiringRequest::create($data + ['status' => 'pending']);

        return response()->json(['message' => 'Hiring request received', 'data' => $hr], 201);
    }

    public function accept($id)
    {
        // Require admin token to accept requests
        $token = request()->header('X-ADMIN-TOKEN') ?? request()->bearerToken();
        if (!$token || $token !== env('ADMIN_API_TOKEN')) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $hr = HiringRequest::findOrFail($id);
        $hr->status = 'accepted';
        $hr->accepted_at = now();
        $hr->save();

        // Send acceptance email
        try {
            Mail::to($hr->email)->send(new HiringRequestAccepted($hr));
        } catch (\Exception $e) {
            return response()->json(['message' => 'Accepted but failed to send email', 'error' => $e->getMessage(), 'data' => $hr]);
        }

        return response()->json(['message' => 'Hiring request accepted and email sent', 'data' => $hr]);
    }
}
