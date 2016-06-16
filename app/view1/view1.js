'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http, $window) {

  // inicializar
  $scope.news= [];
  $scope.current = {};
  $scope.show = false;
  // cargar el json

    $http.get('view1/news_mock.json')
    //$http.get('<dirección http desde la que se quiera cargar el .json>')
      .then(function(response){
            $scope.news = response.data;
            $scope.news.forEach(function(n){
            n.selected = false;

          });
        console.log($scope.news);
          }, function(error){
            $window.alert("Error: " + error);
          }
      );

  $scope.showing = function() {
    $scope.show = !$scope.show;
    $scope.current = {};
    $scope.news.forEach(function(n){
      n.selected = false;

    });
  }
  $scope.selectNews = function($event)
  {
    var id = parseInt($event.currentTarget.name);

    $scope.news.forEach(function(n){
      if (n.id === id)
      {
        n.selected = !n.selected;
        if(n.selected)
        {
          $scope.current = n;
        }
        else{
          $scope.current = {};
        }
      }else
      {
        n.selected = false;
      }

    });
  };

  $scope.selection = function($event)
  {
    var id = parseInt($event.currentTarget.name);
    $scope.news.forEach(function(n){
      if (n.id === id)
      {

        return n.selected;
      }
    });
  }
  
});