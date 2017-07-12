'use strict';

var app = angular.module('cookingApp');

app.controller('HomeController',['$scope','recipeFactory', 'authorFactory', function($scope, recipeFactory, authorFactory){
  $scope.featuredRecipe = {};
  $scope.featuredSpecialist = {};
  var fRecipeid = 0;
  var fSpecialistid = 0;

  $scope.featuredRecipe = recipeFactory.getRecipe(fRecipeid);
  $scope.featuredSpecialist = authorFactory.getAuthor(fSpecialistid);
}]);

app.controller('RecipeController',['$scope','recipeFactory',function($scope,recipeFactory){

  $scope.recipes = [];

  $scope.recipes = recipeFactory.getRecipes();
}]);
