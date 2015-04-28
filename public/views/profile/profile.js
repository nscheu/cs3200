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
    console.log(book.id);
    console.log($scope.currentUser.bookshelf[0].id);
    var index = $scope.favorites.indexOf(book);
    var dbIndex = -1;

    for (i in $scope.currentUser.bookshelf) {
      if ($scope.currentUser.bookshelf[i].id == book.id) {
        console.log("MATCH FOUND", book.id, i);
        dbIndex = i;
      }
    }

    
    console.log("REMOVE FAVORITE", dbIndex);
    //console.log($scope.currentUser.bookshelf);
    console.log($scope.currentUser.bookshelf.splice(dbIndex, 1));

    //console.log($scope.currentUser.bookshelf);
    $scope.favorites.splice(index, 1);
    $http.post("/api/updateUserFavorites", $scope.currentUser)
      .success(function (resource) {
        $scope.favorites = resource;
      });
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
   .success(function (deleteduser) {
     $scope.users.splice(deleteduser, 1);
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
