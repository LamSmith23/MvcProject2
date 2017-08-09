moviesApp.controller("moviecontroller", function ($scope, moviefactory) {

    $scope.movieList = [];

    $scope.movieHeader = "Movie List";


    $scope.getMovies = function (callback) {
        moviefactory.requestMovieIndex(callback);
    };

    $scope.GetMoviesCallback = function (response) {


        $scope.movieList = response;

    };

    $scope.getMovies($scope.GetMoviesCallback);

});

moviesApp.controller("moviedetailcontroller", function ($scope, moviedetailfactory) {
    var urlParts = window.location.href.split('/');
    var lastPart = urlParts[urlParts.length - 1];
    var movieID = parseInt(lastPart);
  

        $scope.moviedetailList = {};

        $scope.detailHeader = "Movie Details";



        $scope.getMovie = function (callback) {

            moviedetailfactory.requestMovieDetailIndex(movieID, callback);
        };

        $scope.GetMovieCallback = function (data) {


            $scope.moviedetailList = data;



        };

        $scope.getMovie($scope.GetMovieCallback);

    });

