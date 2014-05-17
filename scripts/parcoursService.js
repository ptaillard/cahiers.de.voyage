var CahiersDeVoyageApp = CahiersDeVoyageApp || {};
CahiersDeVoyageApp.service('parcoursService', function(){
    var informationParcours = [
						        {
						            id: 1,
						            latitude: 37.800165,
						            longitude: -122.433116,
						            title: 'San Francisco',
						            date: 'du 16 au dimanche 22 Juin',
						            dateinfos: 'Nous resterons dans le coin du lundi 16 au dimanche 22 Juin.',
						            informations: 'sanfrancisco.html',
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
						            informations: 'barstow.html',
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
						            informations: 'kingman.html',
						            hotel: 'Best Western Plus King\'s Inn and suites - 2930 East Andy Devine Avenue',
						            image: 'kingman.jpg'
						        },
						        {
						            id: 4,
						            latitude: 36.054598,
						            longitude: -112.119729,
						            title: 'Grand Canyon',
						            date: 'du 24 au vendredi 27 Juin',
						            dateinfos: 'Nous profiterons du site du 24 au 27 Juin.',
						            informations: 'grandcanyon.html',
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
						            informations: 'monumentvalley.html',
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
						            informations: 'page.html',
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
						            informations: 'brycecanyon.html',
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
						            informations: 'zioncanyon.html',
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
						            informations: 'lasvegas.html',
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
						            informations: 'losangeles.html',
						            hotel: 'Hollywood Orchid Suites - 1753 Orchid Avenue - Hollywood',
						            image: 'hollywood.jpg'
						        }
						   ];

    this.etapes = informationParcours;

    this.polylines = [
				        {
				            path: informationParcours,
				            stroke: {
				                color: '#FF6C3C',
				                weight: 3
				            },
				            editable: false,
				            draggable: false,
				            geodesic: false,
				            visible: true
				        }
				    ];
});