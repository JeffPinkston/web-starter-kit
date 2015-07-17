'use strict';
/**
 * Created by jpinkston on 7/16/15.
 */
angular.module('myApp')
.config([])
    /*.directive('navBar', function () {
        return {
            restrict: 'E',
            scope: {
                info : '='
            },
            templateUrl: 'navBar/navBar.html'

        };
    })*/
    .controller('NavBarCtrl', function($scope) {
        $scope.titles = {
            'home': 'Home',
            'specials': 'Specials',
            'location': 'Location',
            'events': 'Events',
            'contact': 'Contact'
        }
    });