(function(){
  var app = angular.module('app', []);

  app.directive('navBar', function () {
    return {
      restrict: 'E',
      templateUrl: './app/templates/navbar.html'
    };
  });

  app.directive('zombieLife', function() {
    return {
      restrict: 'E',
      replace: 'true',
      link: function(scope, element, attrs) {
        scope.zomname = attrs.zomname;
        scope.pic = attrs.pic;
        scope.kitname = attrs.kitname;
        scope.danger = attrs.danger;
      },
      templateUrl: './app/templates/zombieLife.html'

    };
  });

  app.directive('kittyComment', function() {
    return {
      restrict: 'E',
      scope: {
        text: '='
      },
      template: '<textarea type="text" ng-model="text" rows="4" cols="58"></textarea>'
    };
  });

  app.directive('kittyWorld', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<p style="color:{{color}}"><big>Welcome to our Kitty Zombie World!<big></p>',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          elem.css('background-color', 'white');
          scope.$apply(function() {
            scope.color = 'white';
          });
        });
        elem.bind('mouseover', function() {
          elem.css('cursor', 'pointer');
        });
      }
    };
  });

  app.directive('bloodBorder', function() {
    return {
      scope: {},
      restrict: 'A',
      link: function($scope, element, attrs) {
        element.on('click', function() {
          element.css('border', 'solid');
          element.css('border-width', '10px');
          element.css('color', 'firebrick');
        });
      }
    };
  });

})();
