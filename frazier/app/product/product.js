'use strict';

/* global angular */

(function(){
  angular.module('product', [])
    .controller('ProductController', ['$log', ProductController])
    .directive('productListing', function(){
      return {
        restrict: 'E', 
        templateUrl: 'product/product.html', 
        controller: 'ProductController',
        controllerAs: 'productCtrl',
        scope: {
          product: '='
        }
      };
    });
  
  
  
  
  function ProductController($log){
    this.section      = 'info';
    this.isSet        = isSet;
    this.setSection   = setSection;
    
    function isSet(sectionToCheck){
      return this.section === sectionToCheck;
    }
    function setSection(sectionToSet){
      $log.log('section set to ' + sectionToSet);
      this.section = sectionToSet;
    }
  }
  
  
  
})();
