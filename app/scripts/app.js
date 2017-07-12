'use strict';

var app = angular.module('cookingApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('app',{
    url   : '/',
    views : {
      'header': {
        templateUrl : 'views/header.html'
      },
      'content': {
        templateUrl : 'views/home.html',
        controller  : 'HomeController'
      },
      'footer' : {
        templateUrl : 'views/footer.html'
      }
    }
  })
  .state('app.recipes',{
    url : 'recipes',
    views : {
      'content@' : {
        templateUrl : 'views/recipes.html',
        controller : 'RecipeController'
      }
    }
  }) ;

  $urlRouterProvider.otherwise('/');
});
