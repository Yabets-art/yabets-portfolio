<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactReply extends Mailable
{
    use Queueable, SerializesModels;

    public Contact $contact;
    public string $replySubject;
    public string $replyBody;

    public function __construct(Contact $contact, string $replySubject, string $replyBody)
    {
        $this->contact = $contact;
        $this->replySubject = $replySubject;
        $this->replyBody = $replyBody;
    }

    public function build()
    {
        return $this->subject($this->replySubject)
                    ->view('emails.contact_reply')
                    ->with(['contact' => $this->contact, 'body' => $this->replyBody]);
    }
}
