'use strict';

angular.module('App.edit', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/object:key', {
        templateUrl: 'edit/edit.html',
        controller: 'editCtrl'
    });
}])

.controller('editCtrl', function($firebaseArray, $scope) {
    var ref = new Firebase('https://meangularapp.firebaseio.com');
    $scope.data = $firebaseArray(ref);

});
