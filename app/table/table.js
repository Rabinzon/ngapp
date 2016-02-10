'use strict';

angular.module('App.table', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/table', {
        templateUrl: 'app/table/table.html',
        controller: 'tableCtrl'
    });
}])

.controller('tableCtrl', function($firebaseArray, $scope, FIREBASE_URL) {
    $scope.data = $firebaseArray(FIREBASE_URL.CONTACTS);
});
