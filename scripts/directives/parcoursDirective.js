var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvParcours', ['parcoursService', function($parcoursService) {
		var etapes = $parcoursService.etapes;
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				google.maps.visualRefresh = true;

				$scope.map = {
				    center: {
				        latitude: 36.562520,
				        longitude: -117.429064
				    },
				    zoom: 6,
				    markers : etapes
				};
			},
			templateUrl: './views/parcours.html'
		};
	}])
;
