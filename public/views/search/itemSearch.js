//var app = angular.module("MyItemsApiAPP", []);

app.controller("MyItemsApiController", function ($scope, $http) {

  $scope.favorites = [];

  $scope.addToFavorites = function (movie) {
    if ($scope.favorites.indexOf(movie) == -1) {
      $scope.favorites.push(movie);
    }
  };

  $scope.removeFavorite = function (movie) {
    var index = $scope.favorites.indexOf(movie);
    $scope.favorites.splice(index, 1);
  };

  $scope.searchTitle = function () {
    $http.jsonp("https://www.googleapis.com/books/v1/volumes?q=" + $scope.titleSearch + "&callback=JSON_CALLBACK")
     // ")
  .success(function (response) {
    $scope.books = response['items'];
    console.log(response)
  });
  };


  $scope.saveFavorites = function ($favorites) {
    //$user.bookshelf = $favorites;
    //console.log($favorites);
    $http.post('/saveFavoritesToProfile', $favorites)
        .success(function ($favorites) {
          //console.log($favorites);
          //console.log($user);
        });
   };


});