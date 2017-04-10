/**
 * Created by binhn on 4/4/2017.
 */
/* global app */

app.filter('uppercase', function () {
    return function decorateFilter(input) {
        return input.toUpperCase();
    };
});