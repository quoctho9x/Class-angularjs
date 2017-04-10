/**
 * Created by binhn on 4/4/2017.
 */
/* global app */

app.controller('LoginCtrl', function ($scope, $rootScope, $location, UserSrv) {
    $rootScope.title = 'Login';
    $scope.user = {
        username: '',
        password: ''
    };
    $scope.message = null;

    $scope.login = function () {

        onLoginSuccessfully();
       // UserSrv.login($scope.user.username, $scope.user.password, onLoginSuccessfully, onLoginFailed);
    };

    function onLoginFailed(error) {
        $scope.message = error.message;
    }

    function onLoginSuccessfully() {
        $scope.message = null;
        $location.path('/dashboard');
    }
});