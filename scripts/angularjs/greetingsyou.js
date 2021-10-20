var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
  $scope.myHeader = "Hai";
  $timeout(function () {
      $scope.myHeader = "Apa kabar?";
  }, 2000);
});
