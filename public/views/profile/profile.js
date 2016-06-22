app.controller('ProfileCtrl', function ($scope, $http, $location) {


  

  $scope.openUpdateUserModal = function (user) {
    console.log(user.user_first_name);
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
    var index = $scope.users.indexOf(user);
    console.log("delUser - ProfileJS");
    console.log(user);
    $scope.users.splice(index, 1);
    $http.post("/rest/delUser", user)
   .success(function (deleteduser) {
     console.log("deleterdUser =", user);
     
     $location.url("/profile");
   });
  };

 

});
