'use strict';

var app = angular.module('cookingApp');

app.service('recipeFactory',[function(){
  var recipes=[
  {
         name: 'Palak Chutney',
         image: 'images/palakChutney.jpg',
         course: 'mains',
         cusine: 'South Indian',
         label: '',
         description: 'A healthy chutney, tasting awesome with hot rice and a little ghee. A good thing about this food is, you eat 100% green leaves and not a little green leaves in a sea of other ingridients',
         procedure: ''
  },
  {
         name: 'Brocoli Soup',
         image: 'images/brocoliSoup.jpg',
         course: 'soups',
         cusine: '',
         label: '',
         description: 'An easy way to make kids smack their lips for something made out of Brocoli.',
         procedure: ''
  }
  ];

  this.getRecipe = function(index){
    return recipes[index];
  }

  this.getRecipes = function(){
    return recipes;
  }

}]);

app.service('authorFactory',[function(){
  var authors = [
    {
      name : "Mucherla Manasa",
      image : "images/mucherlamanasa.jpg",
      description : "A typical never-been-to-kitchen-before-marriage newbie to oh-thats-easy-2-minutes specialist. Eight years of non stop cooking for a husbannd that hates eating outside food resulted in this change :)",
      specialist : "Paratha-Curries"
    }
  ];

  this.getAuthor = function(index){
    return authors[index];
  }

}]);
