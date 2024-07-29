<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Carbon\Carbon;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        config(['app.locale' => 'id']);
        Carbon::setLocale('id');
        RateLimiter::for('login', function (Request $request) {
          
            return [
                Limit::perMinute(15)->by($request->ip())->response(function () {
                        return back()->withErrors([
                            'attempt'=>'Too many attempt please try again in a while, then refresh it!'
                        ])->onlyInput('attempt');
                    }),
                Limit::perMinute(5)
                    ->by($request->input('username'))
                    ->response(function () {
                        return back()->withErrors([
                            'attempt'=>'Too many attempt please try again in a while, then refresh it!'
                        ])->onlyInput('attempt');
                    }),
            ];
        });
    }
}
