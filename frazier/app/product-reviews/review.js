'use strict';
/* global angular */

(function(){
  angular.module('productReviews', [])
    .controller( 'ReviewController',['$log', ReviewController])
    .directive('productReviews', function(){
      return {
        restrict: 'E',
        templateUrl: 'product-reviews/review.html',
        controller: 'ReviewController',
        controllerAs: 'reviewCtrl'
      };
    });
  
  function ReviewController($log){
    this.addReview = addReview;
    this.newReview = {};
    
    function addReview(product){
      this.newReview.createdOn = Date.now();
      product.reviews.push(this.newReview);
      this.newReview = {};
    }
    
    
  }
  
})();
