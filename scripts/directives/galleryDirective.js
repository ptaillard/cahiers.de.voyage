var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.directive('cdvGallery', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				// Set of Photos
			    $scope.photos = [
			        {src: './images/media/gallery/ST.jpg', desc: 'Saint Tropez'},
			        {src: './images/media/gallery/camera.jpg', desc: 'Appareil photo'}
			    ];

			    // initial image index
			    $scope._Index = 0;

			    // if a current image is the same as requested image
			    $scope.isActive = function (index) {
			        return $scope._Index === index;
			    };

			    // show prev image
			    $scope.showPrev = function () {
			        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
			    };

			    // show next image
			    $scope.showNext = function () {
			        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
			    };

			    // show a certain image
			    $scope.showPhoto = function (index) {
			        $scope._Index = index;
			    };
			},
			templateUrl: './views/gallery.html'
		};
	}])
;
