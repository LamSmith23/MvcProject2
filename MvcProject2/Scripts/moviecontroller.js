moviesApp.controller("moviecontroller", function ($scope, moviefactory) {

    $scope.movieList = [];

   

    $scope.getMovies = function (callback) {
        moviefactory.requestMovieIndex(callback);
    }

    $scope.GetMoviesCallback = function (response) {


        $scope.movieList = response;

    }

    $scope.getMovies($scope.GetMoviesCallback);

});

    moviesApp.controller("moviedetailcontroller", function ($scope, moviedetailfactory) {

        $scope.moviedetailList = [];



        $scope.getMovie = function (callback) {
            moviedetailfactory.requestMovieDetailIndex(callback);
        }

        $scope.GetMovieCallback = function (response) {

            
            $scope.moviedetailList = response;

            console.log(response);

        }

        $scope.getMovie($scope.GetMovieCallback);

    });

