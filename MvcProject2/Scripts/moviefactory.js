moviesApp.factory("moviefactory", function ($http) {
    return {
        requestMovieIndex: function (callback) {
            var url = "http://localhost:61626/Movies/GetMovies";

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }


    }



});

moviesApp.factory("moviedetailfactory", function ($http) {
    return {
        requestMovieDetailIndex: function (callback, ID) {
            var url = "http://localhost:61626/Movies/GetDetails/" + ID;

            console.log(url);
          
            

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }


    }



});