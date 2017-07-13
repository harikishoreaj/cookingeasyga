'use strict';

var app = angular.module('cookingApp');

app.service('recipeFactory',[function(){
  var recipes=[
  {
         id : 0,
         name: 'Palak Chutney',
         image: 'images/palakChutney.jpg',
         course: 'mains',
         cusine: 'South Indian',
         label: '',
         description: 'A healthy chutney, tasting awesome with hot rice and a little ghee. A good thing about this food is, you eat 100% green leaves and not a little green leaves in a sea of other ingridients',
         ingridients:
           {
             "Palak" : "1 bunch",
             "Groundnuts" : "4 Tbsp",
             "Coconut" : "3 Tbsp",
             "Green chilles" : "4 (According to your spice)",
             "Jaggery" : "1 Tbsp",
             "Tamarind" : "1 Tbsp",
             "Onion" : "1 small",
             "Salt" : "To taste",
             "Oil" : "2 Tbsp"
           },
         procedure: [
             "Dry fry the ground nuts and set aside.",
              "Heat oil in a pan big enough to hold the palak leaves.",
              "Add palak leaves and vertically spilt green chilles and toss until the leaves shrink well.",
              "Allow it to cool to room temperature.",
              "Transfer the above to the mixie jar, add ground nuts, coconut, jaggery, tamarind and salt. Grind it to a fine paste. Add a little water if required.",
              "Finely chop the onions and mix with the above paste."
         ]
  },
  {
         id : 1,
         name: 'Brocoli Soup',
         image: 'images/brocoliSoup.jpg',
         course: 'soups',
         cusine: '',
         label: '',
         description: 'An easy way to make kids smack their lips for something made out of Brocoli.',
         ingridients: [],
         procedure: []
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
