function initMap() {
    // Map options
    var mapOptions = {
        center: { lat: 39.8283, lng: -98.5795 }, // Centered on the United States
        zoom: 4, // Initial zoom level to show the whole US
    };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Custom markers 
    var marker3 = new google.maps.Marker({
        position: { lat: 41.69419730879148, lng: -71.09062388083191 },
        map: map,
        title: 'Marker 3',
    });

    marker3.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker3.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '1187 Blossom Rd - Fall River, MA 2.0 MW',
        });
        infoWindow.open(map, marker3);
    });

    var marker4 = new google.maps.Marker({
        position: { lat: 41.32102176132188, lng: -74.51621070369704 },
        map: map,
        title: 'Marker 4',
    });

    marker4.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker4.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '1718 Route 1 -North Minisink, NY 2.66',
        });
        infoWindow.open(map, marker4);
    });
     
    var marker5 = new google.maps.Marker({
        position: { lat: 43.5538558773989, lng: -73.363863 },
        map: map,
        title: 'Marker 5',
    });
     marker5.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker5.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '218 Buckley Rd. A - East Whitehall, NY 2.0',
        });
        infoWindow.open(map, marker5);
    });
    var marker6 = new google.maps.Marker({
        position: { lat: 43.54168638751778, lng: -73.38877877532214 },
        map: map,
        title: 'Marker 6',
    });
     marker6.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker6.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '218 Buckley Rd. B - West Whitehall, NY 2.66',
        });
        infoWindow.open(map, marker6);
    });
    var marker7 = new google.maps.Marker({
        position: { lat: 43.53962618557392, lng: -73.32629800415803 },
        map: map,
        title: 'Marker 7',
    });
     marker7.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker7.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'Greenmount Cemetery Lane Whitehall, NY 2.66',
        });
        infoWindow.open(map, marker7);
    });
    var marker8 = new google.maps.Marker({
        position: { lat: 42.535833989611916, lng: -71.99865125767163 },
        map: map,
        title: 'Marker 8',
    });
     marker8.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker8.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '232 Gardner Rd Hubbardston, MA 1.4',
        });
        infoWindow.open(map, marker8);
    });
    var marker9 = new google.maps.Marker({
        position: { lat: 42.53711174186428, lng: -71.99620200422565 },
        map: map,
        title: 'Marker 9',
    });
     marker9.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker9.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '240 Gardner Rd Hubbardston, MA 1.4',
        });
        infoWindow.open(map, marker9);
    });
    var marker10 = new google.maps.Marker({
        position: { lat: 42.91088136088629,  lng: -74.2138068618722 },
        map: map,
        title: 'Marker 10',
    });
    marker10.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker10.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '5813A Minaville Road Florida, NY 2.66',
        });
        infoWindow.open(map, marker10);
    });
    var marker11 = new google.maps.Marker({
        position: { lat:  42.08880852873628,  lng: -72.00740794658385 },
        map: map,
        title: 'Marker 11',
    });
   marker11.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker11.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '725 Guelphwood Road Southbridge, MA 725',
        });
        infoWindow.open(map, marker11);
    });
    var marker12 = new google.maps.Marker({
        position: { lat: 42.2980480206799, lng:  -72.09500714232837 },
        map: map,
        title: 'Marker 12',
    });
    marker12.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker12.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '107 New Braintree Road North Brookfield, MA 650',
        });
        infoWindow.open(map, marker12);
    });
    var marker13 = new google.maps.Marker({
        position: { lat: 42.104283811486276, lng: -70.96250316192601 },
        map: map,
        title: 'Marker 13',
    });
     marker13.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker13.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'Cape Cod Lumber Facility Abington, MA 1.0',
        });
        infoWindow.open(map, marker13);
    });
    var marker14 = new google.maps.Marker({
        position: { lat: 42.54135586433697, lng: -71.92855517538955 },
        map: map,
        title: 'Marker 14',
    });
     marker14.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker14.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'Westminster Country Club Westminster, MA 650',
        });
        infoWindow.open(map, marker14);
    });
    var marker15 = new google.maps.Marker({
        position: { lat: 42.41724949134798, lng: -72.17897345767162 },
        map: map,
        title: 'Marker 15',
    });
    marker15.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker15.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '250 Spring Hill Road Barre, MA 2.40',
        });
        infoWindow.open(map, marker15);
    });
    var marker16 = new google.maps.Marker({
        position: { lat: 42.39693415644736, lng: -72.1001334772499 },
        map: map,
        title: 'Marker 16',
    });
    marker16.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker16.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'South Barre Road Barre, MA 650',
        });
        infoWindow.open(map, marker16);
    });
    var marker17 = new google.maps.Marker({
        position: { lat: 42.41135068533911, lng: -72.11090372883581 },
        map: map,
        title: 'Marker 17',
    });
     marker17.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker17.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '85 Wauwinet Road Barre, MA 1.38',
        });
        infoWindow.open(map, marker17);
    });
    var marker18 = new google.maps.Marker({
        position: { lat: 42.1956521505553, lng: -72.03371296192005 },
        map: map,
        title: 'Marker 18',
    });
     marker18.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker18.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '125 Adams Road East Brookfield, MA 6.77',
        });
        infoWindow.open(map, marker18);
    });
    var marker19 = new google.maps.Marker({
        position: { lat: 42.55963151776743, lng: -72.26917216004506 },
        map: map,
        title: 'Marker 19',
    });
     marker19.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker19.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '927 White Pond Road Athol, MA',
        });
        infoWindow.open(map, marker19);
    });
    var marker20 = new google.maps.Marker({
        position: { lat: 43.10447130276742, lng:  -73.54179391953079 },
        map: map,
        title: 'Marker 20',
    });
    marker20.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker20.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '338 Windy Hill Road Easton, NY',
        });
        infoWindow.open(map, marker20);
    });
    var marker21 = new google.maps.Marker({
        position: { lat: 42.755711003073635, lng: -73.57996033119616 },
        map: map,
        title: 'Marker 21',
    });
     marker21.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker21.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '138 Brick Church Road Brunswick , NY',
        });
        infoWindow.open(map, marker21);
    });
    var marker22 = new google.maps.Marker({
        position: { lat: 41.77761398281666, lng: -70.96500300427604 },
        map: map,
        title: 'Marker 22',
    });
     marker22.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker22.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '30 Washburn Road Freetown, MA 2.77',
        });
        infoWindow.open(map, marker22);
    });
    var marker23 = new google.maps.Marker({
        position: { lat: 41.56376353903041, lng: -74.34507923497651},
        map: map,
        title: 'Marker 23',
    });
     marker23.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker23.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '519 Route 151 A-North Oppenheim, NY 1.81',
        });
        infoWindow.open(map, marker23);
    });
    var marker24 = new google.maps.Marker({
        position: { lat: 41.46680994583915, lng: -74.50668444847547 },
        map: map,
        title: 'Marker 24',
    });
     marker24.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker24.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '1448 Route 211 (A) Mt. Hope, NY 2.80',
        });
        infoWindow.open(map, marker24);
    });
    var marker25 = new google.maps.Marker({
        position: { lat: 43.07479315664963, lng: -74.69058732044695 },
        map: map,
        title: 'Marker 25',
    });
     marker25.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker25.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '519 Route 151 B-South Oppenheim, NY 2.80',
        });
        infoWindow.open(map, marker25);
    });
    var marker26 = new google.maps.Marker({
        position: { lat: 42.145980002314126, lng: -71.93107843308746 },
        map: map,
        title: 'Marker 26',
    });
     marker26.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker26.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '0 Horne Homestead, Rd Charlton, MA',
        });
        infoWindow.open(map, marker26);
    });
    var marker27 = new google.maps.Marker({
        position: { lat:  43.02292618791258, lng: -74.3689134195363 },
        map: map,
        title: 'Marker 27',
    });
    marker27.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker27.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '0 Elmwood Avenue Johnstown, NY 4.40',
        });
        infoWindow.open(map, marker27);
    });
    var marker28 = new google.maps.Marker({
        position: { lat: 44.72773622954818, lng: -75.33795203291221 },
        map: map,
        title: 'Marker 28',
    });
     marker28.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker28.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '583A Five Mile Line Road A-East Lisbon, NY 2.78',
        });
        infoWindow.open(map, marker28);
    });
    var marker29 = new google.maps.Marker({
        position: { lat: 44.344474091080876, lng: -75.44382189814932 },
        map: map,
        title: 'Marker 29',
    });
     marker29.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker29.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '77 Scotch Settlement Road Gouverneur, NY 1.44',
        });
        infoWindow.open(map, marker29);
    });
    var marker30 = new google.maps.Marker({
        position: { lat: 43.0624675501236, lng: -74.10944851583233 },
        map: map,
        title: 'Marker 30',
    });
     marker30.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker30.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '0 State Hwy 29 Broadalbin, NY 2.66',
        });
        infoWindow.open(map, marker30);
    });
    var marker31 = new google.maps.Marker({
        position: { lat: 42.993792786989886, lng: -74.31952369070243 },
        map: map,
        title: 'Marker 31',
    });
     marker31.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker31.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '171-173 Co Hwy 142 A Johnstown, NY 2.66',
        });
        infoWindow.open(map, marker31);
    });
    var marker32 = new google.maps.Marker({
        position: { lat: 42.95076476313125,  lng: -74.1245707288358 },
        map: map,
        title: 'Marker 32',
    });
    marker32.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker32.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '512 State Hwy 67 Amsterdam, NY 5.60',
        });
        infoWindow.open(map, marker32);
    });
    var marker33 = new google.maps.Marker({
        position: { lat: 42.75642614590686, lng: -74.19920696188262 },
        map: map,
        title: 'Marker 33',
    });
     marker33.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker33.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '664 Alexander Road Duanesburg, NY 2.66',
        });
        infoWindow.open(map, marker33);
    });
    var marker34 = new google.maps.Marker({
        position: { lat: 43.09602614633511, lng: -78.27203998270838 },
        map: map,
        title: 'Marker 34',
    });
     marker34.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker34.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'Lockport Road Oakfield/Elba, NY 500.0',
        });
        infoWindow.open(map, marker34);
    });
    var marker35 = new google.maps.Marker({
        position: { lat:  42.377821008981726, lng: -84.88393947486254 },
        map: map,
        title: 'Marker 35',
    });
    marker35.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker35.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'R Drive North Lee Township, MI 500.0',
        });
        infoWindow.open(map, marker35);
    });
    var marker36 = new google.maps.Marker({
        position: { lat: 42.370923290549335, lng: -84.84670089050958 },
        map: map,
        title: 'Marker 36',
    });
     marker36.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker36.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: '23 Mile Road Lee / Clarence Township, MI 500.0',
        });
        infoWindow.open(map, marker36);
    });
    var marker37 = new google.maps.Marker({
        position: { lat: 41.06290118378567, lng:  -88.59116691455874 },
        map: map,
        title: 'Marker 37',
    });
    marker37.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker37.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'E 3000 N Road Blackstone, IL 400.0',
        });
        infoWindow.open(map, marker37);
    });
    var marker38 = new google.maps.Marker({
        position: { lat: 38.59200302893872, lng: -85.97902609629864},
        map: map,
        title: 'Marker 38',
    });
     marker38.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker38.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'Canton South Boston Road Salem, IN 750.0',
        });
        infoWindow.open(map, marker38);
    });
    var marker39 = new google.maps.Marker({
        position: { lat: 30.307021175956425, lng:  -92.8870094454191 },
        map: map,
        title: 'Marker 39',
    });
    marker39.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker39.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'Atterberry Road Welch, LA 1,000.0',
        });
        infoWindow.open(map, marker39);
    });
    var marker40 = new google.maps.Marker({
        position: { lat: 30.23657533930083,  lng: -93.37555192889863},
        map: map,
        title: 'Marker 40',
    });
    marker40.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker40.getPosition());
        // Optionally, you can open an info window with additional information
        var infoWindow = new google.maps.InfoWindow({
            content: 'Mohawk Trail Sulphur, LA-Battery Storage 500',
        });
        infoWindow.open(map, marker40);
    });

     
    // You can add more markers as needed
}


