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
  })

  .state('app.recipedetail',{
    url : 'reciepdetail/:id',
    views : {
      'content@' : {
        templateUrl : 'views/recipedetail.html',
        controller  : 'RecipeDetailController'
      }
    }
  })

  .state('app.contactus',{
    url : 'contactus',
    views : {
      'content@' : {
        templateUrl : 'views/contactus.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
});
