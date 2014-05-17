var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvGallery', ['$timeout', function($timeout) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope, $http) {
				var timer;
				var delay = 4000;
				var startedSlideshow = false;
			    $scope.photos = [];


				$scope.loadImages = function() {

					$http.get('./ajax/gallery.php').
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

			    $scope.startSlideshow = function () {
			    	startedSlideshow = true;
			        slideshow();
			    };

			    $scope.stopSlideshow = function () {
			        startedSlideshow = false;
			        $timeout.cancel(timer);
			    };

			    $scope.isStartedSlideshow = function () {
			        return startedSlideshow === true;
			    };

				var slideshow = function() {
				  timer = $timeout(function() {
				    $scope.showNext();
				    timer = $timeout(slideshow, delay);
				  }, delay);
				};
				 
				$scope.$on('$destroy', function() {
				  $scope.stopSlideshow(); // when the scope is getting destroyed, cancel the timer
				});
			},
			templateUrl: './views/gallery.html'
		};
	}])
;
