app.controller('ProfileCtrl', function ($scope, $http, $location) {


  $http.get("/rest/user")
  .success(function (users) {
    $scope.users = users;
  });

  $http.get("rest/favorites")
  .success(function (favorites) {
    console.log("rest/favorites");
    console.log(favorites);
    $scope.favorites = favorites;
  });

  //removeFavorite(book)
  $scope.removeFavorite = function (book) {
    var index = $scope.favorites.indexOf(book);
    $scope.favorites.splice(index, 1);
  };

  $scope.openUpdateUserModal = function (user) {
    console.log(user.pubData.firstName);
    console.log(user);
    $scope.updateUser = user;
    //$scope.firstname = user.pubData.firstName;
    //$scope.lastname = user.pubData.lastName;
    $("#openUpdateUserModal").modal('show');
  };

  //Updates the user
  $scope.updateUserInDb = function (updatedUser) {
    console.log("updateUserInDb");
    console.log(updatedUser);
    $("#openUpdateUserModal").modal('hide');
    $http.post("/api/updateUser", updatedUser)
       .success(function (resource) {
         $scope.users = resource;         
       });
  };

  //delete user(user)
  $scope.delUser = function (user) {
    console.log("delUser - ProfileJS");
    console.log(user);
    $http.post("/rest/delUser", user)
   .success(function (users) {
     $scope.users = users;
     $location.url("/profile");
   });
  };

  $http.get("rest/pubComments")
  .success(function (pubComments) {
    console.log("rest/pubComments");
    console.log(pubComments);
    $scope.pubComments = pubComments;
  });

});
