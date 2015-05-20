angular.module('starter', [])
  
  .controller("NavbarCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.current_user = { points_count: 3 };

    $rootScope.$on('addPoint', function() {
      $scope.current_user.points_count = ++$scope.current_user.points_count
    })
  }])

  .controller("MyFirstCtrl", ['$scope', '$rootScope', '$http', 'Movie', function ($scope, $rootScope, $http, Movie) {

    $scope.foo = { bar: 'My First Angular App' };

    // $scope.movies = Movie.all();

    $scope.addPoint = function() {
      $rootScope.$broadcast('addPoint')
    }

    $scope.searchMovies = function() {
      $http.get('http://www.omdbapi.com/?s=' + $scope.search)
        .success(function(data) {
          console.log("Succeeded: ");
          console.log(data);
          if (data.Error) {
            alert(data.Error);
            $scope.noMovies = true;          
          }
          $scope.movies = data.Search;
        }).error(function(data) {
          console.log("Failed!");
          $scope.movies = [];
        });
      }

  }])

  .factory('Movie', function() {

    // Some fake testing data
    var movies = [{
      id: 0,
      title: 'Pirates of the Carribean',
      poster_url: 'http://images.vcpost.com/data/images/full/48799/pirates-of-the-carribean-dead-men-tell-no-tales.jpg'
    }, {
      id: 1,
      title: 'Pirates of the Carribean',
      poster_url: 'http://images.vcpost.com/data/images/full/48799/pirates-of-the-carribean-dead-men-tell-no-tales.jpg'
    },{
      id: 2,
      title: 'Pirates of the Carribean',
      poster_url: 'http://images.vcpost.com/data/images/full/48799/pirates-of-the-carribean-dead-men-tell-no-tales.jpg'
    }, {
      id: 3,
      title: 'Pirates of the Carribean',
      poster_url: 'http://images.vcpost.com/data/images/full/48799/pirates-of-the-carribean-dead-men-tell-no-tales.jpg'
    }, {
      id: 4,
      title: 'Pirates of the Carribean',
      poster_url: 'http://images.vcpost.com/data/images/full/48799/pirates-of-the-carribean-dead-men-tell-no-tales.jpg'
    }];

    return {
      all: function() {
        return movies;
      },
      remove: function(chat) {
        movies.splice(movies.indexOf(movie), 1);
      },
      get: function(movieId) {
        for (var i = 0; i < movies.length; i++) {
          if (movies[i].id === parseInt(movieId)) {
            return movies[i];
          }
        }
        return null;
      }
    };
  });