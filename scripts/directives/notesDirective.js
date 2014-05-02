var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvNotes', ['parcoursService', function($parcoursService) {
		var etapes = $parcoursService.etapes;

		return {
			restrict: 'A',
			replace: true,
			controller: function ($scope) {
				$scope.etapes = etapes;
			},
			templateUrl: './views/notes.html'
		};
	}])
;
