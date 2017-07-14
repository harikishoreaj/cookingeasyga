'use strict';

var app = angular.module('cookingApp');

app.service('recipeFactory',[function(){
  var recipes=[
  {
         id : 0,
         name: 'Palak Chutney',
         authorid : 0,
         image: 'images/palakChutney.jpg',
         course: 'mains',
         cusine: 'South Indian',
         label: 'healthy',
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
         name: 'Broccoli Soup',
         authorid : 0,
         image: 'images/broccoliSoup.jpg',
         course: 'soups',
         cusine: '',
         label: 'healthy',
         description: 'An easy way to make kids smack their lips for something made out of Broccoli.',
         ingridients:
         {
           "Garlic" : "4 cloves",
           "Onion"  : "1",
           "Potato" : "1",
           "Broccoli Florets" : "1.5 Cups",
           "Black Pepper Powder" : "According to Taste",
           "Salt" : "According to Taste"
         },
         procedure: [
              "In a deep cooking pot (Karahi/Kadai) melt butter and add the chopped garlic and fry it",
              "Add chopped onions and fry it then add chopped potato and fry it for a while",
              "Add 4 cups of water, salt and black pepper powder .",
              "when it starts to boil close the lid and cook in a medium flame for 10 mins.",
              "Then add broccoli florets to it and boil for 5 mins till it becomes tender.",
              "Cool it down and grind it in a mixer, pour it back into the same pot and bring it to a boil.",
              "Optional : Top it with a little cream to give a richer, appealing look for kids."
         ]
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
      id: 0,
      name : "Mucherla Manasa",
      image : "images/mucherlamanasa.jpg",
      description : "A typical never-been-to-kitchen newbie to oh-thats-easy-2-minutes specialist. Eight years of non stop cooking for a husbannd that hates eating outside food resulted in this change :)",
      specialist : "Paratha-Curries"
    }
  ];

  this.getAuthor = function(index){
    return authors[index];
  }

}]);
