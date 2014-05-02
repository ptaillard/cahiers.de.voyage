var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvParticipants', ['$window', function($window) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				
			},
			templateUrl: './views/gallery.html'
		};
	}])
;
