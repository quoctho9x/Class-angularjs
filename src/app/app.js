/**
 * Created by binhn on 20/03/2017.
 */
/* global angular */

//noinspection JSUnusedGlobalSymbols
var app = angular.module('myApp', ['ngRoute']);

app.run(function ($rootScope, $route, $location, UserSrv) {
    $rootScope.$on('$routeChangeStart', function (next, current) {
        if (current.$$route.requireLogin && !UserSrv.isLogin()) {
            $location.path('/login');
        }
    });
});