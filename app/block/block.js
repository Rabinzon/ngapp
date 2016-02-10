'use strict';

angular.module('App.bloc', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/block', {
        templateUrl: 'app/block/block.html',
        controller: 'blockCtrl'
    });
}])

.controller('blockCtrl', function($firebaseArray, $scope, FIREBASE_URL) {
    $scope.data = $firebaseArray(FIREBASE_URL.CONTACTS);
})
