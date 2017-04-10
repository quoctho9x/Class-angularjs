/**
 * Created by binhn on 4/4/2017.
 */
/* global app */

//restrict names (E), attributes (A), class names (C), and comments (M).
app.directive('customForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/custom-form/custom-form.html',
        scope: {
            ngConfigs: '=',
            ngModel: '=',
            onSubmit: '&'
        },
        link: function (scope) {
            scope.ngConfigs = 'aaa';
        }
    };
});