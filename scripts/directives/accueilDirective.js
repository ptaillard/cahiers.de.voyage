var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvAccueil', ['pageService', function($pageService) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				$scope.pageService = $pageService;
				$scope.menuselected = $pageService.get();
			},
			templateUrl: './views/accueil.html'
		};
	}])
;
