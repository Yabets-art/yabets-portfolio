<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
        }
        .content {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 0 0 10px 10px;
            border: 1px solid #e9ecef;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: 600;
            color: #495057;
            margin-bottom: 5px;
        }
        .field-value {
            background: white;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #dee2e6;
        }
        .message-box {
            background: white;
            padding: 20px;
            border-radius: 5px;
            border-left: 4px solid #667eea;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #dee2e6;
            color: #6c757d;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📧 New Contact Form Submission</h1>
        <p>Someone has reached out through your portfolio website</p>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="field-label">👤 Name:</div>
            <div class="field-value">{{ $contactName }}</div>
        </div>
        
        <div class="field">
            <div class="field-label">📧 Email:</div>
            <div class="field-value">
                <a href="mailto:{{ $contactEmail }}">{{ $contactEmail }}</a>
            </div>
        </div>
        
        <div class="field">
            <div class="field-label">💬 Message:</div>
            <div class="message-box">
                {{ $contactMessage }}
            </div>
        </div>
        
        <div class="field">
            <div class="field-label">🕒 Submitted:</div>
            <div class="field-value">{{ $submittedAt }}</div>
        </div>
    </div>
    
    <div class="footer">
        <p>This email was sent from your portfolio contact form.</p>
        <p>Reply directly to this email to respond to {{ $contactName }}.</p>
    </div>
</body>
</html>