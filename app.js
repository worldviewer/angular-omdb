angular.module('starter', [])
  
  .controller("NavbarCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.current_user = { points_count: 3 };

    $rootScope.$on('addPoint', function() {
      $scope.current_user.points_count = ++$scope.current_user.points_count
    })
  }])

  .controller("MyFirstCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.foo = { bar: 'My First Angular App' }

    $scope.addPoint = function() {
      $rootScope.$broadcast('addPoint')
    }
  }]);
