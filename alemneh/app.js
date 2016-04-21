const app = angular.module('FightCard', []);

app.directive('boutLocation', function() {
  return {
    restirct: 'E',
    scope: {
      venue: '=',
      city:  '=',
      state: '=',
      date:  '=',
      time:  '='
    },
    transclude: true,
    replace: true,
    template: '<div><h1>{{venue}} in {{city}}, {{state}}</h1><h3>{{date}} at {{time}}</h3></div>'
  };
});

app.directive('champion', function() {
  return {
    restirct: 'A',
    scope: {
      name:     '=',
      weight:   '=',
      homeTown: '=',
      belt:     '='
    },
    replace: true,
    template: '<div><p>Name: {{name}}</p><p>Weight: {{weight}}</p><p>From: {{homeTown}}</p><p>Holds: {{belt}}</p></div>'
  }
})

app.directive('challenger', function() {
  return {
    restirct: 'A',
    scope: {
      name:     '=',
      weight:   '=',
      homeTown: '='
    },
    replace: true,
    template: '<div><p>Name: {{name}}</p><p>Weight: {{weight}}</p><p>From: {{homeTown}}</p></div>'
  }
})

app.directive('referee', function() {
  return {
    restirct: 'E',
    scope: {
      name: '=',
      numFights: '='
    },
    transclude: true,
    replace: true,
    template: '<div>Referee: {{name}}, Number of bouts referreed: {{numFights}}</div>'
  }
})

app.directive('purchaseTicket', function() {
  return {
    restirct: 'E',
    replace: true,
    template: '<button class="btn btn-default btn-lg btn-block">Purchase Ticket</button>',
    link: function($scope, element, attrs) {
      element.on('click', function() {
        element.css('background', 'green');
      })
    }
  }
})
