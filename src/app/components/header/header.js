/**
 * Created by binhn on 4/4/2017.
 */
/* global app */

//bindings: @ => normal value
//bindings: < => constant value
//bindings: & => function
app.component('header', {
    templateUrl: 'app/components/header/header.html',
    bindings: {
    },
    controller: function (UserSrv) {
        this.getName = function () {
            return UserSrv.getName();
        };
    }
});