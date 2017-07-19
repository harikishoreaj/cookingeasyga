'use strict';

var app = angular.module('cookingApp');

app.controller('HomeController', funcHomeController);
app.controller('RecipeController',funcRecipeController);
app.controller('RecipeDetailController', funcRecipeDetailController);


// funcHomeController.$inject = ['$scope','recipeFactory', 'authorFactory'];
function funcHomeController($scope, recipeFactory, authorFactory){
  $scope.featuredRecipe = {};
  $scope.featuredSpecialist = {};
  var fRecipeid = 0;
  var fSpecialistid = 0;

  $scope.featuredRecipe = recipeFactory.getRecipe(fRecipeid);
  $scope.featuredSpecialist = authorFactory.getAuthor(fSpecialistid);
};

// funcRecipeController.$inject = ['$scope','recipeFactory'];
function funcRecipeController($scope,recipeFactory){
  $scope.recipes = [];
  $scope.recipes = recipeFactory.getRecipes();
};

// funcRecipeDetailController.$inject = ['$scope', '$stateParams', 'recipeFactory', 'authorFactory'];
function funcRecipeDetailController($scope,$stateParams,recipeFactory,authorFactory){
  $scope.recipe = recipeFactory.getRecipe(parseInt($stateParams.id,0));
  $scope.author = authorFactory.getAuthor($scope.recipe.authorid);
};
