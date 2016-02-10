'use strict';

angular.module('App.add', ['ngRoute', 'firebase', 'ui.mask'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'app/add/add.html',
        controller: 'addCtrl'
    });

}])
.controller('addCtrl', function($scope, $timeout, FIREBASE_URL) {

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
    $scope.ResetA = function() {
        document.querySelectorAll('.add__form')[0].reset();
        document.querySelectorAll('img')[0].src = '//placehold.it/1x1/';
        $scope.name = '';
        $scope.lastname = '';
        $scope.phone = '';
        $scope.email = '';
    };
    $scope.Submit  = function() {
        var newIdd = 0;
        if ($scope.name != undefined & $scope.lastname != undefined &
            $scope.lastname != undefined & $scope.email != undefined) {
            FIREBASE_URL.COUNTER.once('value', function(snapshot) {
                console.log(snapshot.val());
                newIdd = snapshot.val() + 1;
                FIREBASE_URL.CONTACTS.child(newIdd).set({
                        'name': $scope.name,
                        'lastname': $scope.lastname,
                        'phone': $scope.phone,
                        'mail': $scope.email,
                        'img': img64,
                        'id': newIdd
                    }
                );
                FIREBASE_URL.update({'counter': newIdd});
            }, function(errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });

            $scope.success = true;
            document.querySelectorAll('save-btn').disabled = true;
            $timeout(function() {
                $scope.success = false;
                $scope.ResetA();
            }, 2000);
        }

    };

});
