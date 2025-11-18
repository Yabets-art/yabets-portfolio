<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Contact;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('New Contact Form Submission - ' . $this->contact->name)
                    ->view('emails.contact-form')
                    ->with([
                        'contactName' => $this->contact->name,
                        'contactEmail' => $this->contact->email,
                        'contactMessage' => $this->contact->message,
                        'submittedAt' => $this->contact->created_at->format('M d, Y at h:i A'),
                    ]);
    }
}