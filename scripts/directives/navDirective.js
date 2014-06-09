var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp
	.directive('cdvNav', ['pageService', function($pageService, selectMenu) {
		
		return {
			restrict: 'A',
			replace: true,
			controller: function ($scope) {
				$scope.menuselected = $pageService.get();

				$scope.updateMenu = function(menu) {
					$pageService.set(menu);
				}
			},
			templateUrl: './views/nav.html'
		};
	}])
;
