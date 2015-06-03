/**
 * Created by Sriram on 5/23/2015.
 */
(function(angular) {
    'use strict';
    angular.module('piggyBank', [])
        .controller('PiggyBankController', ['$scope', function($scope) {
            $scope.greetings = [
                {name: 'Oink',
                animal: 'Piggy'}, {
                name: 'Hiss',
                animal: 'Snake'
            }];

            $scope.clickHandler = function(buttonName) {
                console.log(buttonName);
                $scope.well.value = buttonName;
            };
        }])
})(window.angular);