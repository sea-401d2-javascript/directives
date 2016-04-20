'use strict';
/* global angular */

(function(){
  angular.module('productInfo', [])
    .controller('InfoController', ['$log', InfoController])
    .directive('productInfo', function(){
      return {
        restrict: 'E', 
        templateUrl: 'product-info/info.html',
        controller: 'InfoController',
        controllerAs: 'infoCtrl'
      };
    });
  
  
  function InfoController($log){
    this.test = 'TESTING';
    
  }
  
  
})();
