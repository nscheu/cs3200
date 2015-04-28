app.controller('pubProfileCtrl', function ($scope, $http, $location, $rootScope) {
  $scope.viewUser = $rootScope.viewUser;
  $scope.pubComments = $scope.viewUser.pubComments;

  console.log("Public Profile Controller");
  console.log($scope.viewUser.pubComments);

  $http.get("rest/pubFavorites", {
    params: { _id: $scope.viewUser._id }})
    .success(function (favorites) {
      $scope.favorites = favorites;
    });


  $scope.addComment = function (viewUser) {
    viewUser.pubComments.srcUserName = $scope.currentUser.username;
    //console.log("addComment func: pub Comment =");
    //console.log(viewUser.pubComments);
    $http.post("rest/addComment", {
      params: { _id: $rootScope.viewUser._id, bodyPublic: viewUser.pubComments.bodyPublic}
    })
      .success(function (response) {
        console.log("RESPONSE IS:::::::::::::::::::::::::::::::::::");
        console.log(response);
        $scope.pubComments = response.pubComments;
      });
  };

  $scope.formatDate = function (dateCreated) {
    //console.log("formatDate");
    date = new Date(dateCreated);
    return date.toDateString();
  };

  $scope.formatTime = function (dateCreated) {
    //console.log("formatTime");
    date = new Date(dateCreated);
    return date.toLocaleTimeString();
  };
 

});