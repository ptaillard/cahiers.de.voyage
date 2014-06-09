var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp
	.directive('cdvPage', ['pageService', function($pageService) {	
		return {
			restrict: 'A',
			transclude: true,
			replace: true,
			controller: function ($scope) {
				$scope.scrolleddown = function(direction) {
					if(direction === 'down') {
						updateMenuSelected();
					}
				};
				$scope.scrolledup = function(direction) {
					if(direction === 'up') {
						updateMenuSelected();
					}
				};

				var updateMenuSelected = function() {
					$pageService.set($scope.idPage);
				};
			},
			scope: {idPage:'@cdvPage',
					offsetdown: '=offsetdown',
					offsetup: '=offsetup'},
			template: '<span ui-jq="waypoint" ui-options="scrolledup, {offset:{{offsetup}}}"><div ng-transclude ui-jq="waypoint" ui-options="scrolleddown, {offset:{{offsetdown}}}" class="page" id="{{idPage}}" data-top="opacity:1.0; " data-80p-top="opacity:0.2; "></div></span>'
		};
	}])
;
