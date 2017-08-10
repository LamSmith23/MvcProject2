

            /* 'Get' Methods */

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
})

moviesApp.factory("movieeditfactory", function ($http) {
    return {
        requestMovieEditIndex: function (callback, ID) {
            var url = "http://localhost:61626/Movies/EditDetails/" + ID;

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }


    }

})

moviesApp.factory("moviedetailfactory", function ($http) {
    return {
        requestMovieDetailIndex: function (callback, ID) {
            var url = "http://localhost:61626/Movies/GetDetails/" + ID;

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }

     }
})

moviesApp.factory("moviedeletefactory", function ($http) {
    return {
        requestMovieDeleteIndex: function (callback, ID) {
            var url = "http://localhost:61626/Movies/DeleteDetails/" + ID;

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    data = angular.fromJson(data);
                    callback(data);
                }).error(function (data, status, headers, config) { });
        }
    }

})


                /* 'POST' Methods */

moviesApp.factory("createmoviefactory", function ($http) {
    return {
        createMovieIndex: function (movie) {
            var url = "http://localhost:61626/Movies/Create/";
            console.log(movie);

            $http({ method: 'POST', url: url, data: movie,headers:{ 'Content-Type': 'application/json' } })
                .success(function (data, status, headers, config) {
                    window.location.href = "/Movies/";
                   }).error(function (data,status,headers,config) { });
        }
    }

    

});