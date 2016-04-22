'use strict';

/* global angular */

(function(){
  angular.module('store', ['product'])
    .controller('StoreController', StoreController)
    .directive('exampleStore', function(){
      return {
        restrict: 'E', 
        templateUrl: 'store/store.html', 
        controller: 'StoreController',
        controllerAs: 'storeCtrl'
      };
    });
  
  
  
  function StoreController(){
    this.test = 'TEST';
    
    

    
    
    //RIPPED FROM CODESCHOOL EXAMPLE CODE
    this.products = [{
      name: 'Azurite',
      description: '"Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems."',
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      reviews: [{
        stars: 5,
        body: '"I love this gem!"',
        author: '"joe@thomas.com"',
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: '"This gem sucks."',
        author: '"tim@hater.com"',
        createdOn: 1397490980837
      }]
    }, {
      name: 'Bloodstone',
      description: '"Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however."',
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      reviews: [{
        stars: 3,
        body: '"I think this gem was just OK, could honestly use more shine, IMO."',
        author: '"JimmyDean@sausage.com"',
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: '"Any gem with 12 faces is for me!"',
        author: '"gemsRock@alyssaNicoll.com"',
        createdOn: 1397490980837
      }]
    }, {
      name: 'Zircon',
      description: '"Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem."',
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      reviews: [{
        stars: 1,
        body: '"This gem is WAY too expensive for its rarity value."',
        author: '"turtleguyy@zdn.me"',
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: '"BBW: High Shine != High Quality."',
        author: '"LouisW407@gmail.com"',
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: '"Don\'t waste your rubles!"',
        author: '"nat@flatland.com"',
        createdOn: 1397490980837
      }]
    }];
  }
})();
