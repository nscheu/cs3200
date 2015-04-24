app.controller('pubProfileCtrl', function ($scope, $http, $location, $rootScope) {
  $scope.viewUser = $rootScope.viewUser;

  console.log("Public Profile Controller");
  console.log($scope.viewUser);

  $http.get("rest/pubFavorites", {
    params: { _id: $rootScope.viewUser._id }})
    .success(function (favorites) {
      $scope.favorites = favorites;
    });


  $scope.addComment = function (viewUser) {
    viewUser.pubComments.srcUserName = $scope.currentUser.username;
    console.log("addComment func: pub Comment =");
    console.log(viewUser.pubComments);
    $http.get("rest/addComment", {
      params: { _id: $rootScope.viewUser._id, pubComment: viewUser.pubComments}
    })
      .success(function (response) {
        console.log(response);
      });
  };

});