var testApp = angular.module("testApp",[]);
testApp.controller("formCtrl", function($scope){
  $scope.customer = {firstName:$scope.firstName, lastName:$scope.lastName, email:$scope.email, country:$scope.country};
  $scope.submitForm = function(){
    console.log($scope.customer);
  }
});
