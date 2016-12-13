(function() {
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.menu                      = '';
    $scope.message                   = '';
    $scope.messageColor              = '';
    $scope.messageFontColor          = '';
    $scope.lunchMenuInputBorderColor = '';

    $scope.checkIfTooMuch = function() {
      var menu  = $scope.menu.split(','),
          count = 0;

      for (var i = 0; i < menu.length; i++) {
        if (menu[i].trim(' ').length > 0) {
          count++;
        }
      }

      if (count == 0) {
        showRedMessage('Please enter data first');
      } else if (count <= 3) {
        showGreenMessage('Enjoy!');
      } else {
        showGreenMessage('Too much!');
      }
    };

    var showRedMessage = function(message) {
      $scope.message                   = message;
      $scope.messageFontColor          = 'red';
      $scope.lunchMenuInputBorderColor = 'red-border';
    };

    var showGreenMessage = function(message) {
      $scope.message                   = message;
      $scope.messageFontColor          = 'green';
      $scope.lunchMenuInputBorderColor = 'green-border';
    };
  };

})();
