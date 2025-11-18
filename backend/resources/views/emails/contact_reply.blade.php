<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Reply from Yabets</title>
  </head>
  <body>
    <p>Hello {{ $contact->name }},</p>
    <p>{!! nl2br(e($body)) !!}</p>
    <p>Best regards,<br>Yabets Desalegn</p>
  </body>
</html>
