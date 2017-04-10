/**
 * Created by binhn on 4/4/2017.
 */
/* global app */

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'app/pages/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            requireLogin: false
        })
        .when('/login', {
            templateUrl: 'app/pages/login/login.html',
            controller: 'LoginCtrl',
            requireLogin: false
        })
        .when('/product', {
            templateUrl: '/app/pages/product/product.html',
            controller: 'ProductCtrl',
            requireLogin: false
        })
        .when('/', {
            redirectTo: '/dashboard'
        })
        .otherwise({
            templateUrl: 'app/pages/404/404.html',
            controller: '404Ctrl'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});