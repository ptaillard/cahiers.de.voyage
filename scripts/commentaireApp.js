var CahiersDeVoyageApp = angular.module('CommentaireApp', ['ui.bootstrap', 'ui.utils'])
	.controller('CommentaireCtrl', function($scope, $http) {
		$scope.photos = [];
		$scope.photoSelect = '';
		$scope.commentaire = '';
		$scope.auteur = '';

		$scope.ajout = '';

		$scope.loadImages = function() {

			$http.get('./ajax/gallery.php').
				success(function(data, status, headers, config) {
			      	$scope.photos = data;
			    }).
			    error(function(data, status, headers, config) {
			      $scope.error = "Problème d'accès au serveur...";
			    });
		};

		$scope.ajouter = function() {
			if($scope.photoSelect == '' || $scope.commentaire == '') {
				$scope.ajout = 'Veuillez renseigner les champs';
				return;
			}

			$scope.ajout = '';
			$http({
					  url: './ajax/image_add_commentaire.php', 
					  method: "GET",
					  params: {"image": $scope.photoSelect,
					  		"comment": $scope.commentaire,
					  		"auteur": $scope.auteur
							}
				}).
				success(function(data, status, headers, config) {
			      	$scope.ajout = 'Commentaire ajouté';
			      	$scope.loadImages();
			    }).
			    error(function(data, status, headers, config) {
			      $scope.ajout = 'Erreur lors de l\'ajout';
			    });
		};

		$scope.loadImages();
    });

