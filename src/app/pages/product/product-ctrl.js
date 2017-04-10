/**
 * Created by binhn on 4/4/2017.
 */
/* global app */



app.controller('ProductCtrl', function($scope, $rootScope,$http) {
    $rootScope.title = 'product';
    var dataUrl = "app/services/data.json";

    $http.get(dataUrl)
        .then(function(response) {
            $scope.data = response.data;
        });
});