var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.service('pageService', function(){

    var menuselected = ["accueil"];

    this.get = function() {
    	return menuselected;
    }

    this.set = function(menu) {
		menuselected[0] = menu;
    }
});