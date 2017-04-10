/**
 * Created by binhn on 4/4/2017.
 */
/* global app */

app.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
});