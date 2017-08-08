moviesApp.controller("moviecontroller", function ($scope, moviefactory) {

    $scope.movieList = [];

    $scope.firstName = "Lamont";
    $scope.lastName = "Smith";

    $scope.getMovies = function (callback) {
        moviefactory.requestMovieIndex(callback);
    }

    $scope.GetMoviesCallback = function (response) {
        
        
        $scope.movieList = response;

    }

    $scope.getMovies($scope.GetMoviesCallback);

});