angular.module('sanosip.controllers', ['sanosip.services'])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    $scope.loginData = {};

    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    $scope.login = function () {
      $scope.modal.show();
    };

    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('dashboardCtrl', function ($scope) {
    $scope.itemList = [
      { title: 'Enrolled Classes', id: 1 },
      { title: 'Profile', id: 2 },
      { title: 'Messages', id: 3 }
    ];
  })

  .controller('LoginCtrl', function (API, $scope, $state, $http) {

    loginData = {};

    $scope.LogIn = function () {
      API.signin(user).success(function (response) {
        if (response) {
          console.log("Login Successfull : " + response);
        }
      });
    }





