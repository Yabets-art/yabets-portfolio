<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin/messages', function () {
    // Simple HTTP Basic protection for admin UI (development only)
    $adminUser = env('ADMIN_USER', 'admin');
    $adminPass = env('ADMIN_PASS', 'password');

    $hasAuth = false;
    // PHP built-in server may populate PHP_AUTH_USER/PHP_AUTH_PW
    if (!empty($_SERVER['PHP_AUTH_USER']) && !empty($_SERVER['PHP_AUTH_PW'])) {
        $hasAuth = ($_SERVER['PHP_AUTH_USER'] === $adminUser && $_SERVER['PHP_AUTH_PW'] === $adminPass);
    }

    // Also accept Authorization: Basic header
    if (!$hasAuth && !empty($_SERVER['HTTP_AUTHORIZATION'])) {
        if (str_starts_with($_SERVER['HTTP_AUTHORIZATION'], 'Basic ')) {
            $decoded = base64_decode(substr($_SERVER['HTTP_AUTHORIZATION'], 6));
            if ($decoded) {
                [$u, $p] = explode(':', $decoded + ':');
                if ($u === $adminUser && $p === $adminPass) $hasAuth = true;
            }
        }
    }

    if (! $hasAuth) {
        header('WWW-Authenticate: Basic realm="Admin Area"');
        http_response_code(401);
        echo 'Authentication required';
        exit;
    }

    return view('admin');
});

// Basic API routes (app uses a minimal bootstrap; api.php isn't auto-loaded here)
use App\Http\Controllers\HiringRequestController;
use App\Http\Controllers\ContactController;

Route::prefix('api')->group(function () {
    Route::get('/hiring-requests', [HiringRequestController::class, 'index']);
    Route::post('/hiring-requests', [HiringRequestController::class, 'store']);
    Route::post('/hiring-requests/{id}/accept', [HiringRequestController::class, 'accept']);

    Route::get('/contacts', [ContactController::class, 'index']);
    Route::post('/contacts', [ContactController::class, 'store']);
    Route::post('/contacts/{id}/reply', [ContactController::class, 'reply']);
});
