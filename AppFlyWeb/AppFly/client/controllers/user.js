/**
 * Created by jebai on 8/15/15.
 */

angular.module('users', [])

.controller("UserRegisterController", function($scope, $http){

    $scope.load = function() {

    };

    $scope.register = function() {

      console.info("enter register");

      $http.post('/api/users',
        {
          username: $scope.username,
          email: $scope.email,
          password: $scope.password
        }
      ).success(function (data, status, headers) {
          console.log(data, status);
          $scope.id = 'User Id: ' + data.id;
          location.replace('/');
        }
      );
    }
  }
).controller("UserLoginController", function($scope, $http){
    $scope.load = function() {

    };

    $scope.login = function() {

      console.info("enter login");

      $http.post('http://localhost:3000/login/', {
          email: $scope.email,
          password: $scope.password
        }
      ).success(function (data, status, headers) {
          console.log(data, status);
          $scope.id = 'User Id: ' + data.id;
          location.replace('/');
        }
      );
    }
  }
);

