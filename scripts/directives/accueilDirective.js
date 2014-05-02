var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvAccueil', [function(selectMenu) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
			},
			templateUrl: './views/accueil.html'
		};
	}])
;
