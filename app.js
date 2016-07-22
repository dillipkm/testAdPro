var testApp = angular.module("testApp",[]);
testApp.controller("formCtrl", function($scope){
  $scope.countries = ["India", "Nepal", "Pakistan", "UK","Srilanka"];
  $scope.submitForm = function(){
    $scope.customer = {firstName:$scope.firstName, lastName:$scope.lastName, email:$scope.email, country:$scope.country};
    console.log($scope.customer);
  }
});
