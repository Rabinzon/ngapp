'use strict';

angular.module('App', [
  'ngRoute',
  'App.add',
  'App.bloc',
  'App.edit',
  'firebase',
  'App.table'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/block'});
}]).
constant('FIREBASE_URL', {
    ROOT: new Firebase('https://meangularapp.firebaseio.com/'),
    CONTACTS: new Firebase('https://meangularapp.firebaseio.com/contacts'),
    COUNTER: new Firebase('https://meangularapp.firebaseio.com/counter')
});
