app.controller('ProfileCtrl', function ($scope, $http) {
  $http.get("/rest/user")
  .success(function (users) {
    $scope.users = users;
  });

  $http.get("rest/favorites")
  .success(function (favorites) {
    console.log("rest/favorites");
    $scope.favorites = favorites;
  });

});
