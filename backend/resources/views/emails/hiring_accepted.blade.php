<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hiring Request Accepted</title>
  </head>
  <body>
    <p>Hello {{ $request->name }},</p>
    <p>Thank you for reaching out about <strong>{{ $request->role ?? 'the opportunity' }}</strong> at {{ $request->company ?? 'your organization' }}.</p>
    <p>I have reviewed your hiring request and I would be glad to discuss further. Please reply to this email to schedule a meeting or provide additional details.</p>
    <p>Best regards,<br>Yabets Desalegn</p>
  </body>
</html>
