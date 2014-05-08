var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvGallery', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope, $http) {
			    $scope.photos = [];


				$scope.loadImages = function() {

					$http.get('images.json').
						success(function(data, status, headers, config) {
					      	$scope.photos = data;
					    }).
					    error(function(data, status, headers, config) {
					      $scope.error = "Problème d'accès au serveur...";
					    });
				};

			    $scope._Index = 0;
			    $scope.loadImages();

			    $scope.isActive = function (index) {
			        return $scope._Index === index;
			    };

			    $scope.showPrev = function () {
			        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
			    };

			    $scope.showNext = function () {
			        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
			    };

			    $scope.showPhoto = function (index) {
			        $scope._Index = index;
			    };
			},
			templateUrl: './views/gallery.html'
		};
	}])
;
