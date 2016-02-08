'use strict';

angular.module('App.list', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'list/list.html',
        controller: 'listCtrl'
    });
}])

.controller('listCtrl', function($firebaseArray, $scope) {
    var ref = new Firebase('https://meangularapp.firebaseio.com');
    var ref2 = new Firebase('https://meangularapp.firebaseio.com');
    $scope.data = $firebaseArray(ref);
    console.log(ref.child('counter'));
});
