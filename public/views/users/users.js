app.controller('UsersCtrl', function ($scope, $http, $location, $rootScope) {
  $rootScope.viewUser = $rootScope.viewUser;
  $scope.viewUser = $rootScope.viewUser;

  $http.get("/rest/user")
    .success(function (users) {
      $scope.users = users;
    });

  $scope.viewUser = function (viewUser) {
    console.log("viewUser fun called");
    console.log(viewUser);
    $rootScope.viewUser = viewUser;
    $location.url("/pubProfile");
  };

});