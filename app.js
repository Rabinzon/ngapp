'use strict';

angular.module('App', [
  'ngRoute',
  'App.add',
  'App.list',
  'App.edit',
  'firebase',
  'App.view2'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/view'});
}]);
