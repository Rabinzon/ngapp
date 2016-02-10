'use strict';

angular.module('App.edit', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/edit:id', {
        templateUrl: 'app/edit/edit.html',
        controller: 'editCtrl'
    });
}])

.controller('editCtrl', function($firebaseArray, $scope, $routeParams, $timeout, $location, FIREBASE_URL) {

    $scope.data = $firebaseArray(FIREBASE_URL.ROOT);
    var urlParam = $routeParams.id.slice(1, $routeParams.id.length);
    new Firebase('https://meangularapp.firebaseio.com/contacts/' + urlParam)
    .once('value', function(snap) {
        $scope.name = snap.val().name;
        $scope.lastname = snap.val().lastname;
        $scope.phone = snap.val().phone;
        $scope.email = snap.val().mail;
        $scope.img = snap.val().img;
    });
    $scope.Kill = function() {
        FIREBASE_URL.CONTACTS.child(urlParam).remove();
        $scope.success = 1;
        $timeout(function() {
            $scope.success = false;
            $location.path('/block');
        }, 1000);

    };
    var img64 = '//placehold.it/1x1/';

    function el(id) {return document.getElementById(id);}

    function readImage() {
        if (this.files && this.files[0]) {
            var FR = new FileReader();
            FR.onload = function(e) {
                el('img').src = e.target.result;
                img64 = e.target.result;
            };
            FR.readAsDataURL(this.files[0]);
        }
    }
    el('file').addEventListener('change', readImage, false);
    $scope.Update = function() {
        FIREBASE_URL.CONTACTS.child(urlParam).update({
            'name': $scope.name,
            'lastname': $scope.lastname,
            'phone': $scope.phone,
            'mail': $scope.email,
            'img': img64,
            'id': urlParam});
        $scope.success = true;
        $timeout(function() {
            $scope.success = false;
        }, 2000);
    };
});
