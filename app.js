'use strict';


var hel = angular.module('ctf', ['ui.bootstrap', 'ngMessages']).controller('RegisterController', RegisterController);

function RegisterController($scope) {
  $scope.submit = function() {
    $scope.newname = $scope.initialname;
    $scope.newpassword = $scope.pwd;
    $scope.newgender = $scope.content;
    $scope.newtele = $scope.phone;
    $scope.newbday = $scope.date;
    $scope.newemail = $scope.emailid;
    $scope.newstate = $scope.state;
    $scope.pw1 = $scope.password;
  }
}

hel.directive("matchPassword", function() {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=matchPassword"
    },
    link: function(scope, element, attributes, ngModel) {

      ngModel.$validators.matchPassword = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch("otherModelValue", function() {
        ngModel.$validate();
      });
    }
  };
});
