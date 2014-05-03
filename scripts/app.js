var CahiersDeVoyageApp = angular.module('CahiersDeVoyageApp', ['ngAnimate', 'ngTouch', 'ngSanitize', 'directives.skrollr', 'angularSmoothscroll', 'ngRoute', 'ui.bootstrap', 'ui.utils', 'google-maps'])
	.controller('CahiersDeVoyageCtrl', function($scope) {

}).service('parcoursService', function(){
    this.etapes = [
                {
                	id: 1,
                    latitude: 37.800165,
                    longitude: -122.433116,
                    title: 'San Francisco',
                    date: 'du 16 au dimanche 22 Juin',
                    dateinfos: 'Nous resterons dans le coin du lundi 16 au dimanche 22 Juin.',
                    informations: '<p>L\'avion atterrit à 13h après 12h de vol... Nous récupérerons de notre voiture, que dis-je, ENORME voiture américaine chez Avis.' + 
                    '<br>Après je pense que l\'on risque de comater jusqu\'au couché!!' +
                    '<br>A San Francisco, on a prévu de faire pas mal de chose, d\'ailleurs, on a acheté le City Pass...<br>' +
                    'On fera comme tout bon touriste, un trajet en <b>Cable Car</b>, la visite de l\'<b>aquarium</b>, promenade sur <b>Pier 39</b>, flaner du coté de <b>Haight Asbury Street</b>,' + 
                    'se perdre dans le plus beau parc que j\'ai vu: le <b>Golden Gate Park</b>, puis le <b>Golden Gate</b> et enfin un petit tour dans le <b>Downtown</b>.<br>' + 
                    'J\'espère aussi rendre visite à Greg, un vieux pote!! ça nous rajeunit pas tout ça!</p>',
                    hotel: 'Coventry Motor Inn - 1901 Lombard Street',
                    image: 'sanfrancisco.jpg'
                },
                {
                	id: 2,
                    latitude: 34.844601,
                    longitude: -117.08438,
                    title: 'Barstow',
                    date: 'du 22 au lundi 23 Juin',
                    dateinfos: 'Nous ferons une halte la nuit du 22 au 23 Juin.',
                    informations: '<p>Barstow sera une pause sur notre route de San Francisco au Grand Canyon car il y a 1500 km!!<br>' + 
                    '</p>On profitera de cet arrêt pour aller visiter une ville de cowboys <b>Calico</b> ainsi que acheter quelques fringues dans les Outlets du coin!<br>' + 
                    'Puis on prendra la <b>mythique route 66</b>.. On the road again!!!!!',
                    hotel: 'Holiday Inn Express - 2700 Lenwood Rd',
                    image: 'calico.jpg'
                },
                {
                	id: 3,
                    latitude: 35.21126,
                    longitude: -114.016511,
                    title: 'Kingman',
                    date: 'du 23 au mardi 24 Juin',
                    dateinfos: 'Nous ferons également une pause la nuit du 23 au 24 Juin.',
                    informations: '<p>Deuxième arrêt sur notre route vers le Grand Canyon.' + 
                    '</p>',
                    hotel: 'Best Western Plkus King\'s Inn and suites - 2930 East Andy Devine Avenue',
                    image: 'kingman.jpg'
                },
                {
                	id: 4,
                    latitude: 36.054598,
                    longitude: -112.119729,
                    title: 'Grand Canyon',
                    date: 'du 24 au vendredi 27 Juin',
                    dateinfos: 'Nous profiterons du site du 24 au 27 Juin.',
                    informations: '<p>Visite du Grand Canyon... ballades à pied sur Desert view, Hermit road...' + 
                    '</p>',
                    hotel: 'Yavapai Lodge Grand Canyon National Park',
                    image: 'grandcanyon.jpg'
                },
                {
                	id: 5,
                    latitude: 36.726365,
                    longitude: -110.254864,
                    title: 'Monument Valley',
                    date: 'du 27 au samedi 28 Juin',
                    dateinfos: 'Nous resterons une journée du 27 au 28 Juin.',
                    informations: '<p>Arrêt sur la route vers Monument Valley à Tube city? On verra..' + 
                    '<br> On a bien galéré à trouver un hotel à reserver dans le coin, c\'est très cher et pourri!!' +
                    '<br>En espérant que les paysages soient inversement proportionnels à la qualité des logements ;-)' + 
                    '</p>',
                    hotel: 'Wetherhill Inn - 1000 Main Street - Kayenta AZ 86033',
                    image: 'monumentvalley.jpg'
                },
                {
                	id: 6,
                    latitude: 36.916514,
                    longitude: -111.45511,
                    title: 'Page',
                    date: 'du 28 au dimanche 29 Juin',
                    dateinfos: 'Nous resterons une journée du 28 au 29 Juin.',
                    informations: '<p>Petite halte à Page pour visiter Antelop Canyon.' + 
                    '<br>ça nous fera aussi une pause pour les loulous...' + 
                    '</p>',
                    hotel: 'Lulu\'s Sleep Ezze Motel - 105 8th Avenue',
                    image: 'page.jpg'
                },
                {
                	id: 7,
                    latitude: 37.674181,
                    longitude: -112.158279,
                    title: 'Bryce Canyon',
                    date: 'du 29 au jeudi 3 Juillet',
                    dateinfos: 'Nous nous poserons du 29 au 3 Juillet.',
                    informations: '<p>Visite de Bryce Canyon et des alentours' + 
                    '</p>',
                    hotel: 'Best Western Plus Ruby\'s Inn - 26 South Main Street',
                    image: 'brycecanyon.jpg'
                },
                {
                	id: 8,
                    latitude: 37.180193,
                    longitude: -113.006714,
                    title: 'Zion Canyon',
                    date: 'du 3 au vendredi 4 Juillet',
                    dateinfos: 'Nous ferons une halte du 3 au 4 Juillet.',
                    informations: '<p>Visite de Zion. ça a l\'air magnifique!! On vous en dira plus lorsque l\'on y sera ;-)' + 
                    '</p>',
                    hotel: 'Quality Inn & Suites Montclair - 1516 Zion Park Blvd, Springdale',
                    image: 'zioncanyon.jpg'
                },
                {
                	id: 9,
                    latitude: 36.098181,
                    longitude: -115.167416,
                    title: 'Las Vegas',
                    date: 'du 4 au mardi 8 Juillet',
                    dateinfos: 'Nous profiterons du coin du 4 au 8 Juillet.',
                    informations: '<p>Bienvenue à Las Vegas!!!' + 
                    '</p>',
                    hotel: 'Desert Rose Resort - 5051 Duke Ellington Way',
                    image: 'lasvegas.jpg'
                },
                {
                	id: 10,
                    latitude: 34.103339,
                    longitude: -118.340587,
                    title: 'Los Angeles',
                    date: 'du 8 au jeudi 10 Juillet',
                    dateinfos: 'Et notre dernière étape du 8 au 10 Juillet.',
                    informations: '<p>Visite de la cité des anges...<br>' + 
                    'Décollage de 10 Juillet à 15h et arrivée à Paris le 11 Juillet!\nComme à l\'allée, nous avons réussi à choper un A380, cool!!!!' +
                    '</p>',
                    hotel: 'Hollywood Orchid Suites - 1753 Orchid Avenue - Hollywood',
                    image: 'hollywood.jpg'
                }
           ];
})
.run(function() {
});

