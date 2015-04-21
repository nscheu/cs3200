app.controller('LoginCtrl', function ($location, $scope, $http, $rootScope) {
  //console.log('LoginCtrl Controller');
  $scope.login = function (user) {
    //console.log(user);
    $http.post('/login', user)
    .success(function (response) {
      //console.log(response);
      $rootScope.currentUser = user;
      $location.url("/profile");
    });
    
  }
});