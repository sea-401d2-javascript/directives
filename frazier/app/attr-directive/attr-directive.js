'use strict';

/* global angular */

(function(){
  angular.module('redClick', [])
    .directive('turnRedOnClick', function(){
      return {
        restrict: 'A',
        link: function($scope, element, attrs){
          element.on('click', function(){
            element.toggleClass('red-background');
          });
        }
      };
    });
    
  
})();
