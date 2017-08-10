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

})

moviesApp.controller("movieeditcontroller", function ($scope, movieeditfactory) {

    var urlParts = window.location.href.split('/');
    var lastPart = urlParts[urlParts.length - 1];
    var movieEditID = parseInt(lastPart);

    

    $scope.movieEditList = [];
    $scope.editHeader = "Edit Movie List";

       $scope.editMovie = function (callback) {

           movieeditfactory.requestMovieEditIndex(callback, movieEditID);
        };

        $scope.GetMovieEditCallback = function (response) {

            $scope.movieEditList = response;

         };
        $scope.editMovie($scope.GetMovieEditCallback);
    
})




moviesApp.controller("moviedetailcontroller", function ($scope, moviedetailfactory) {
    var urlParts = window.location.href.split('/');
    var lastPart = urlParts[urlParts.length - 1];
    var movieDetailID = parseInt(lastPart);
  

        $scope.moviedetailList = {};

        $scope.detailHeader = "Movie Details";



        $scope.getMovie = function (callback) {

            moviedetailfactory.requestMovieDetailIndex(callback, movieDetailID);
        };

        $scope.GetMovieCallback = function (data) {


            $scope.moviedetailList = data;



        };

        $scope.getMovie($scope.GetMovieCallback);

})

moviesApp.controller("moviedeletecontroller", function ($scope, moviedeletefactory) {
    var urlParts = window.location.href.split('/');
    var lastPart = urlParts[urlParts.length - 1];
    var movieDeleteID = parseInt(lastPart);


    $scope.moviedeleteList = {};

    $scope.deleteHeader = "Delete Details";



    $scope.deleteMovie = function (callback) {

        moviedeletefactory.requestMovieDeleteIndex(callback, movieDeleteID);
    };

    $scope.DeleteMovieCallback = function (data) {


        $scope.moviedeleteList = data;



    };

    $scope.deleteMovie($scope.DeleteMovieCallback);

});

