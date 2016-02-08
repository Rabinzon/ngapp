'use strict';

angular.module('App.add', ['ngRoute', 'firebase', 'ui.mask'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'add/add.html',
        controller: 'addCtrl'
    });

}])

.controller('addCtrl', function($scope, $timeout) {
    var ref = new Firebase('https://meangularapp.firebaseio.com');
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
    $scope.checked = null;
    el('file').addEventListener('change', readImage, false);
    $scope.ResetA = function() {
        document.querySelectorAll('.add__form')[0].reset();
        document.querySelectorAll('img')[0].src = '//placehold.it/1x1/';
        $scope.name = '';
        $scope.lastname = '';
        $scope.phone = '';
        $scope.email = '';
    };

    console.log('notbasd')
    ref.update({
        '-KA05X8g0-pmRZ518eZj/name': 'goodman'
    })
    $scope.Submit  = function() {
        if ($scope.form.$valid) {
            console.log('ok it');
        }
        if ($scope.name != undefined & $scope.lastname != undefined &
            $scope.lastname != undefined & $scope.email != undefined) {
            ref.push({
                'name': $scope.name,
                'lastname': $scope.lastname,
                'phone': '+7' + $scope.phone,
                'email': $scope.email,
                'img': img64
            });
            $scope.success = true;
            $timeout(function() {
                $scope.success = false;
                $scope.ResetA();
            }, 2000);
        }

    };

});
