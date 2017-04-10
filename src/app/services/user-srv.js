/**
 * Created by binhn on 4/4/2017.
 */
/* global app */

app.factory('UserSrv', function ($http) {
    var loginUrl = 'http://localhost/hb/angularjs-lesson/api/authentication.php';
    var user = null;

    function login(username, password, onSuccess, onError) {
        $http.post(loginUrl, {
            username: username,
            password: password
        }).then(function (response) {
            user = response.data;
            if (onSuccess) {
                onSuccess(response.data);
            }
        }, function (response) {
            if (onError) {
                onError(response.data);
            }
        });
    }

    function isLogin() {
        return !!user;
    }

    function getUsername() {
        return user ? user.username : 'Guest';
    }

    function getName() {
        return user ? user.name : 'Guest';
    }

    return {
        getName: getName,
        getUsername: getUsername,
        isLogin: isLogin,
        login: login
    };
});