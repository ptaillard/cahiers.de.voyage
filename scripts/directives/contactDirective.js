var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvContact', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
			},
			templateUrl: './views/contact.html'
		};
	}])
;
