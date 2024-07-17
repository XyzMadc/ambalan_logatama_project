<?php

use App\Http\Middleware\Peserta;
use App\Http\Middleware\AdminGuest;
use Illuminate\Foundation\Application;
use App\Http\Middleware\AdminAuthenticated;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(web: __DIR__ . '/../routes/web.php', commands: __DIR__ . '/../routes/console.php', health: '/up')
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [\App\Http\Middleware\HandleInertiaRequests::class, \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class]);
        $middleware->alias([
            'admin.guest' => AdminGuest::class,
            'admin.auth' => AdminAuthenticated::class,
            'peserta.auth' => Peserta::class,
        ]);
        //
    })

    ->withExceptions(function (Exceptions $exceptions) {
        //
    })
    ->create();
