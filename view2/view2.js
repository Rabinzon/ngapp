'use strict';

angular.module('App.view2', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'viewCtrl'
    });
}])

.controller('viewCtrl', function($firebaseArray, $scope) {
    var ref = new Firebase('https://meangularapp.firebaseio.com');
    $scope.data = $firebaseArray(ref);
});
