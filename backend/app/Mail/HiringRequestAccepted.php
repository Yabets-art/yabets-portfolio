<?php

namespace App\Mail;

use App\Models\HiringRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class HiringRequestAccepted extends Mailable
{
    use Queueable, SerializesModels;

    public HiringRequest $requestModel;

    /**
     * Create a new message instance.
     */
    public function __construct(HiringRequest $requestModel)
    {
        $this->requestModel = $requestModel;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject('Your hiring request was accepted')
                    ->view('emails.hiring_accepted')
                    ->with(['request' => $this->requestModel]);
    }
}
