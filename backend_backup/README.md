# Portfolio Backend API

This is the Laravel backend API for Yabets Desalegn's portfolio website.

## Features

- Contact form submission handling
- Email notifications
- Database storage of messages
- Admin panel for viewing messages
- CORS support for frontend integration

## Setup Instructions

### 1. Install Dependencies
```bash
composer install
```

### 2. Environment Configuration
```bash
cp .env.example .env
php artisan key:generate
```

### 3. Database Setup
Configure your database in `.env` file:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_db
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Run migrations:
```bash
php artisan migrate
```

### 4. Email Configuration
Configure email settings in `.env`:
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=yabetsd29@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
```

### 5. Start the Server
```bash
php artisan serve
```

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to discuss a project..."
  }
  ```

### Admin Endpoints (Requires Authentication)
- **GET** `/api/contacts` - List all contact messages
- **GET** `/api/contacts/{id}` - View specific message

## Deployment

### Option 1: Shared Hosting (cPanel)
1. Upload files to `public_html/api/` directory
2. Create database and import schema
3. Update `.env` with production settings
4. Set document root to `public` folder

### Option 2: VPS/Cloud Server
1. Clone repository
2. Install dependencies
3. Configure web server (Apache/Nginx)
4. Set up SSL certificate
5. Configure environment variables

### Option 3: Laravel Forge/Vapor
1. Connect repository
2. Configure deployment script
3. Set environment variables
4. Deploy

## Security Considerations

- Enable HTTPS in production
- Use strong database passwords
- Configure proper CORS settings
- Add rate limiting for contact form
- Implement CSRF protection
- Use environment variables for sensitive data

## Monitoring

- Check logs: `storage/logs/laravel.log`
- Monitor database performance
- Set up email delivery monitoring
- Configure error reporting (Sentry, Bugsnag)