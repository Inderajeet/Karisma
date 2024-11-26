/*
 * Zoacres Functional JS
 */ 

(function( $ ) {

	"use strict";
	
	var map_lat_long;
	
	$( window ).load(function() {
		initZoacresGmap();
	});

	//Map Function
	var near_markers = [];
	near_markers[0] = '';
	var panorama;
	var map_id, map_target, my_map_options;
	map_target = {
	  latitude : 0,
	  longitude: 0
	};
	var myloc_map;
	var directionsService;
	var directionsDisplay;
	var tlat;
	var tlng;
	
	function initZoacresGmap() {
			
		//var theme_color = $(".zoacres-property-map").length ? $(".zoacres-property-map").attr("data-theme") : '';
		var theme_color = dd_ajax_var.theme_color ? dd_ajax_var.theme_color : '#0087be';
		
		var map_styles = '{ "Aubergine" : [	{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}], "Silver" : [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}], "Retro" : [{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}], "Dark" : [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}], "Night" : [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}], "Blue" : [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#4f8dec"},{"weight":1.5}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#5765e3"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"weight":5.5}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"},{"weight":7}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"weight":3.5}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#46bcec"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}], "Theme" : [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#4f8dec"},{"weight":1.5}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#5765e3"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"weight":5.5}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"},{"weight":7}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"weight":3.5}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"'+ theme_color +'"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}] }';
		
		var map_style_obj = JSON.parse(map_styles);
		
		var map_style_mode = [];
		var map_mode = '';
		var map_lang = '';
		var map_lat = '';
		var map_marker = '';
		var map_options = '';
		var infwin = [];
		var markers_pos = [];
		var near_latlang;
		
		$( ".zoacresgmap" ).each(function( index ) {
			
			var gmap = this;

			if( $( gmap ).attr( "data-map-style" ) ){
				map_mode = $( gmap ).data("map-style");
				map_lang = $( gmap ).data("map-lang");
				map_lat = $( gmap ).data("map-lat");
				map_marker = $( gmap ).data("map-marker");
				if( map_mode === 'aubergine' )
					map_style_mode = map_style_obj.Aubergine;
				else if( map_mode === 'silver' )
					map_style_mode = map_style_obj.Silver;
				else if( map_mode === 'retro' )
					map_style_mode = map_style_obj.Retro;
				else if( map_mode === 'dark' )
					map_style_mode = map_style_obj.Dark;
				else if( map_mode === 'night' )
					map_style_mode = map_style_obj.Night;
				else if( map_mode === 'theme' )
					map_style_mode = map_style_obj.Theme;
				else if( map_mode === 'blue' )
					map_style_mode = map_style_obj.Blue;
				else if( map_mode === 'custom' ){
					var c_style = $( gmap ).attr( "data-custom-style" ) && $( gmap ).attr( "data-custom-style" ) != '' ? JSON.parse( $( gmap ).attr( "data-custom-style" ) ) : '[]';
					map_style_mode = c_style;
				}else{
					map_style_mode = "[]";
				}
			}
			
			if( $( gmap ).attr( "data-multi-map" ) && $( gmap ).attr( "data-multi-map" ) == 'true' ){
				
				var map_values = JSON.parse( $( gmap ).attr( "data-maps" ) );
				map_lat_long = map_values;
				
				if( map_values == '' ) return false;
				
				var map_wheel = $( gmap ).attr( "data-wheel" ) && $( gmap ).attr( "data-wheel" ) == 'true' ? true : false;
				var map_zoom = $( gmap ).attr( "data-zoom" ) && $( gmap ).attr( "data-zoom" ) != '' ? parseInt( $( gmap ).attr( "data-zoom" ) ) : 14;
				var map;
				
				var property_map = $( gmap ).hasClass("zoacres-property-map") ? true : false;

				var map_stat = 1;
				var markers = [];

				map_values.forEach( function( map_value ) {
					map_lat = map_value.map_latitude;
					map_lang = map_value.map_longitude;
					var LatLng = new google.maps.LatLng( map_lat, map_lang );
					near_latlang = LatLng;
					var mapProp= {
						center: LatLng,
						scrollwheel: map_wheel,
						zoom: map_zoom,
						zoomControl: false,
						streetViewControl: false,
						fullscreenControl: false,
						mapTypeControl: false,
						styles: map_style_mode
					};
					
					markers_pos.push(LatLng);
					
					//Create Map
					if( map_stat ){
						var t_gmap = $( gmap );
						map = new google.maps.Map( t_gmap[0], mapProp );
						myloc_map = map;
						map_stat = 0;
					}
					
					directionsService = new google.maps.DirectionsService;
					directionsDisplay = new google.maps.DirectionsRenderer({map: map});
					tlat = map_lat;
					tlng = map_lang;
					
					//Map Marker
					var marker = new google.maps.Marker({
						position: LatLng,
						icon: map_value.map_marker,
						map: map
					});
					
					markers.push(marker);
					
					//Info Window
					if( map_value.map_info_opt == 'on' ) {
						var info_title = map_value.map_info_title;
						var info_addr = map_value.map_info_address;
						
						var contentString = '';
						if( map_value.map_info_html ){
							contentString = '<div class="gmap-info-wrap"><span class="info-box-arrow"></span><span class="infobox-close"><i class="icon-close icons"></i></span><div class="gmap-info-inner">'+ info_addr +'</div></div>';
						}else{
							contentString = '<div class="gmap-info-wrap"><span class="info-box-arrow"></span><span class="infobox-close"><i class="icon-close icons"></i></span><div class="gmap-info-inner"><h3>'+ info_title +'</h3><p>'+ info_addr +'</p></div></div>';
						}

						//InfoBox
						var infobox_options = {
							content: contentString,
							disableAutoPan: true,
							maxWidth: 0,
							pixelOffset: new google.maps.Size( -110, 0 ),
							zIndex: null,
							boxStyle: { 
								width: "220px"
							},
							closeBoxMargin: "0",
							closeBoxURL: "",
							infoBoxClearance: new google.maps.Size(1, 1),
							isHidden: false,
							pane: "floatPane",
							enableEventPropagation: true
						};
						
						var zoacres_ib = new InfoBox(infobox_options);
						infwin.push(zoacres_ib);
						
						// Infobox Open
						google.maps.event.addListener( marker, "click", function (e) {
							zoacresCloseAllInfoBoxes( map, infwin, markers );
							zoacres_ib.open( map, this);
							map.panTo(marker.getPosition());
							map.panBy( 0, -140 );
						});
						
						// Infobox Close
						google.maps.event.addListener( zoacres_ib, 'domready', function(){
							$('.infobox-close').on("click", function (e) {
								e.preventDefault();
								zoacres_ib.close();
								map.panBy( 0, 140 );
							});
						});
						
						//infwin.push(zoacres_ib);
						
					}

					//Street View
					if( $( "#zoacres-street-view" ).length ){
						startStreetView( map, LatLng );
					}

				});

				//Map zoom
				if(  $( "#zoacres-map-zoomplus" ).length ){
					 google.maps.event.addDomListener(document.getElementById('zoacres-map-zoomplus'), 'click', function () {      
					   var current= parseInt( map.getZoom(),10);
					   current++;
					   if(current>20){
						   current=20;
					   }
					   map.setZoom(current);
					});  
				}
					
				if(  $( "#zoacres-map-zoomminus" ).length ){
					 google.maps.event.addDomListener(document.getElementById('zoacres-map-zoomminus'), 'click', function () {      
					   var current= parseInt( map.getZoom(),10);
					   current--;
					   if(current<0){
						   current=0;
					   }
					   map.setZoom(current);
					});  
				}
				
				//Nearby Set
				if( $( ".zoacres-nearby-icon-nav" ).length ){
					$( ".zoacres-nearby-icon-nav .near-by" ).click(function() {
						var near_id = $(this).data('id');
						var near_index = $(this).data('ind');
						nearByJson(near_id, near_index, near_latlang, map);
						return false;
					});
					
				}
				
				//Map style change dynamically
				if( $(".map-style-dropdown-menu").length ){
					$( document ).on( "click", ".map-style-dropdown-menu > a", function() {
						var map_style = $(this).attr("data-style") ? $(this).attr("data-style") : 'roadmap';
						map.setMapTypeId(map_style);
						return false;
					});
				}
				
				//Map mode change dynamically
				if( $(".zoacres-map-change-mode").length ){
					
					$( document ).on( "click", ".zoacres-map-change-mode > a", function() {
						var map_mode = $(this).attr("data-style") ? $(this).attr("data-style") : '';
						var map_style_modet;
						if( map_mode === 'aubergine' )
							map_style_modet = map_style_obj.Aubergine;
						else if( map_mode === 'silver' )
							map_style_modet = map_style_obj.Silver;
						else if( map_mode === 'retro' )
							map_style_modet = map_style_obj.Retro;
						else if( map_mode === 'dark' )
							map_style_modet = map_style_obj.Dark;
						else if( map_mode === 'night' )
							map_style_modet = map_style_obj.Night;
						else if( map_mode === 'theme' )
							map_style_modet = map_style_obj.Theme;
						else if( map_mode === 'blue' )
							map_style_modet = map_style_obj.Blue;
						else
							map_style_modet = "[]";
							
						var styledMapTypet = new google.maps.StyledMapType(map_style_modet);
						map.mapTypes.set('styled_map', styledMapTypet);
						map.setMapTypeId('styled_map');
						return false;
					});
				}
				
				//Point Marker
				if( $(".doctor-point-marker").length ){
					$( document ).on( "click", ".doctor-point-marker", function( e ) {
						e.preventDefault();
						var prop_pos = parseInt( $(this).data("id") );
						if( markers_pos[prop_pos] ){
							map.setZoom(16);
							var infw_new = infwin[prop_pos];
							google.maps.event.trigger( markers[prop_pos], 'click' );
						}
					});
				}
				
				//Full screen process
				if( $(".map-full-screen").length ){
					$( document ).on( "click", ".map-full-screen", function() {
						$(this).parents(".property-map-identity").toggleClass("full-screen-map-actived");
						$("body").toggleClass("map-full-screen-activated");
						return false;
					});
				}
				
				//Map my location
				if( $(".map-my-location").length ){
					$( document ).on( "click", ".map-my-location", function() {
					
						my_map_options = {
						  enableHighAccuracy: true,
						  timeout: 5000,
						  maximumAge: 0
						};

						map_id = navigator.geolocation.getCurrentPosition(success, error, my_map_options);
						return false;
					});
				}
								
				var property_radius = '';
				var mproperty_radius = '';	

				/* Map Radius Search */
				if( $("#location-search").length ){
					
					// Empty the places when page load
					$("#location-search").val('');
					
					// Create the search box and link it to the UI element.
					var search_input = document.getElementById('location-search');
					var searchBox = new google.maps.places.SearchBox(search_input);
					
					var theme_color = dd_ajax_var.theme_color;
					
					searchBox.addListener('places_changed', function() {
						var places = searchBox.getPlaces();
						
						var mradius = $("#property-radius-value").attr("data-min") ? $("#property-radius-value").attr("data-min") : 10;
						if( mradius == 0 ){
							mradius = 10;
							$("#property-radius-value").text(mradius);
							$("#property-radius").slider({values:[10]});
						}
						var mradius_miles = ( mradius * 1609.3 ); // miles conversion
						
						var bounds = new google.maps.LatLngBounds();
						  places.forEach(function(place) {
							if (!place.geometry) {
							  console.log("Returned place contains no geometry");
							  return;
							}
							// codes removed
							if (place.geometry.viewport) {
							  // Only geocodes have viewport.
							  bounds.union(place.geometry.viewport);
							} else {
							  bounds.extend(place.geometry.location);
							}
						  });
							
							
						if (property_radius != '') {
							property_radius.setMap(null);
							property_radius = '';
						}
						
						  var lat = bounds.getNorthEast(); // LatLng of the north-east corner
						  var lang = bounds.getSouthWest(); 
						  var LatLng = new google.maps.LatLng( lat.lat(), lang.lng() );
						  var circle_args =  {
							strokeColor: theme_color,
							strokeOpacity: 0.2,
							strokeWeight: 0,
							fillColor: theme_color,
							fillOpacity: 0.2,
							map: map,
							center: LatLng,
							radius: mradius_miles
						};
						property_radius = new google.maps.Circle(circle_args);
						map.fitBounds(property_radius.getBounds());

					});
					
					if( $( "#property-radius" ).length ) {
					
						var min_val = Number( $( "#property-radius-value" ).attr("data-min") );
						var max_val = Number( $( "#property-radius-value" ).attr("data-max") );
						
						$( "#property-radius-value" ).text( min_val );
						$( "#property-radius-value" ).text($("#property-radius-value-hidd").val());
						
						$( "#property-radius" ).slider({
							min: min_val,
							max: max_val,
							step: 1,
							values: [ min_val ],
							
							slide: function( event, ui ) {
								$( "#property-radius-value" ).text( ui.values[ 0 ] );
								$( "#property-radius-value" ).attr( "data-min", ui.values[ 0 ] );
								if( $("#location-search").val() != '' ){
									setTimeout(function(){
										google.maps.event.trigger(searchBox, 'places_changed');
									}, 300);
								}
							}
							
						});
					}

				}

				if( $( gmap ).attr( "data-cluster" ) && $( gmap ).attr( "data-cluster" ) == 'true' ){
				
					var cluster_img = $( gmap ).attr( "data-cluster-img" ) ? $( gmap ).attr( "data-cluster-img" ) : '';
				
					//Cluster making
					var clusterStyles = [
						{
							textColor: 'white',
							url: cluster_img,
							height: 52,
							width: 53
						}
					];
					var mcOptions = {
						gridSize: 80,
						styles: clusterStyles,
					};
					
					var markerCluster = new MarkerClusterer(map, markers, mcOptions);
					var last_map = -1;
					
					$( document ).on( "mouseenter", ".property-wrap", function() {
						$(this).unbind('mouseenter mouseleave');
						var i = $( this ).parent("div").index();
						if( $(".property-map-identity .property-map-nav").length ){
							$(".property-map-identity .property-map-nav").attr("data-index", i);
						}

						if( last_map != i && markers_pos[i] ){
							
							map.setZoom(16);
							var infw_new = infwin[i];
							google.maps.event.trigger( markers[i], 'click' );
						}
						last_map = i;

					});
					
					$( ".property-wrap" ).on( "mouseleave", function() {
						$(this).unbind('mouseenter mouseleave');
						var i = $( this ).parent("div").index();
						var infw = infwin[i];
						infw.close( map, markers[i] );
					});

					// Map prev next property
					$(".property-map-nav-next").unbind().click(function( e ) {
					//$( document ).on( "click", ".property-map-nav-next", function( e ) {
						var mark_ind = parseInt( $(this).parents(".property-map-nav").attr("data-index") );

						mark_ind++;
						if( ( infwin.length ) > parseInt(mark_ind) ){
							$(this).parents(".property-map-nav").attr("data-index", mark_ind );
						}else{
							$(this).parents(".property-map-nav").attr("data-index", '0');
							mark_ind = 0;
						}
						
						if( map ){
							map.setZoom(16);
							var infw_new = infwin[mark_ind];
							google.maps.event.trigger( markers[mark_ind], 'click' );
						}
						
						return false;
					});
					
					// Map prev prev property
					$(".property-map-nav-prev").unbind().click(function( e ) {
					//$( document ).on( "click", ".property-map-nav-prev", function( e ) {
						var mark_ind = parseInt( $(this).parents(".property-map-nav").attr("data-index") );

						if( mark_ind ){
							mark_ind--;
							$(this).parents(".property-map-nav").attr("data-index", mark_ind);
						}else{
							$(this).parents(".property-map-nav").attr("data-index", parseInt( infwin.length - 1 ) );
							mark_ind = infwin.length - 1;
						}
						
						if( map ){
							map.setZoom(16);
							var infw_new = infwin[mark_ind];
							google.maps.event.trigger( markers[mark_ind], 'click' );
						}	
						
						return false;
					});
					
				} //data-cluster true if end
				
			}else{
			
				var LatLng = {lat: parseFloat(map_lat), lng: parseFloat(map_lang)};
				
				var map_wheel = $( gmap ).attr( "data-wheel" ) && $( gmap ).attr( "data-wheel" ) == 'true' ? true : false;
				var map_zoom = $( gmap ).attr( "data-zoom" ) && $( gmap ).attr( "data-zoom" ) != '' ? parseInt( $( gmap ).attr( "data-zoom" ) ) : 14;
				
				var mapProp= {
					center: LatLng,
					scrollwheel: map_wheel,
					zoom: map_zoom,
					styles: map_style_mode
				};
				var t_gmap = $( gmap );
				var map = new google.maps.Map( t_gmap[0], mapProp ); //document.getElementById("zoacresgmap")
				
				var marker = new google.maps.Marker({
				  position: LatLng,
				  icon: map_marker,
				  map: map
				});
				
				if( $( gmap ).attr( "data-info" ) == 1 ){
					var info_title = $( gmap ).attr( "data-info-title" ) ? $( gmap ).attr( "data-info-title" ) : '';
					var info_addr = $( gmap ).attr( "data-info-addr" ) ? $( gmap ).attr( "data-info-addr" ) : '';
					var contentString = '<div class="gmap-info-wrap"><h3>'+ info_title +'</h3><p>'+ info_addr +'</p></div>';
					var infowindow = new google.maps.InfoWindow({
					  content: contentString
					});
					marker.addListener( 'click', function() {
					  infowindow.open( map, marker );
					});
				}
				
				google.maps.event.addDomListener( window, 'resize', function() {
					var center = map.getCenter();
					google.maps.event.trigger(map, "resize");
					map.setCenter(LatLng);
				});
				
			}// data multi map false part end
			
		}); // end map each
		
		if( $("#doctors-filter-form").length ){
			setTimeout(function(){
				var myloc_map_options = {
				  enableHighAccuracy: true,
				  timeout: 5000,
				  maximumAge: 0
				};
				
				var my_loc_map_id = navigator.geolocation.getCurrentPosition(getmy_location_forpost, error, myloc_map_options);
			}, 1000);
		}
		
	}
	
	function zoacresCloseAllInfoBoxes( map, infwin, markers ){
		if( infwin.length ){
			var i;
			for( i = 0; i < infwin.length; i++ ){
				var infw = infwin[i];
				//if( cur_info != markers[i] ){
					infw.close( map, markers[i] );
				//}
			}
		}
	}
							/**/
	
	function zoacresZoomControl(div, map) {
		// Get the control DIV. We'll attach our control UI to this DIV.
		var controlDiv = div;
		controlDiv.className = 'zoacres-map-zoomparent';
		
		var zoomin = document.createElement('div');
		zoomin.className = 'zoacres-map-zoomin';
		controlDiv.appendChild(zoomin);

		var zoominText = document.createElement('span');
		zoominText.innerHTML = '<i class="fa fa-plus"></i>';
		zoomin.appendChild(zoominText);

		var zoomout = document.createElement('div');
		zoomout.className = 'zoacres-map-zoomout';
		controlDiv.appendChild(zoomout);

		var zoomoutText = document.createElement('span');
		zoomoutText.innerHTML = '<i class="fa fa-minus"></i>';
		zoomout.appendChild(zoomoutText);		

		// Setup the click event listeners for zoom-in, zoom-out:
		google.maps.event.addDomListener(zoomout, 'click', function() {
		var currentZoomLevel = map.getZoom();
		if(currentZoomLevel != 0){
		 map.setZoom(currentZoomLevel - 1);}     
		});

		google.maps.event.addDomListener(zoomin, 'click', function() {
		var currentZoomLevel = map.getZoom();
		if(currentZoomLevel != 21){
		 map.setZoom(currentZoomLevel + 1);}
		});
	}
	
	function startStreetView( map, LatLng ){
		panorama = new google.maps.StreetViewPanorama(
			document.getElementById('zoacres-street-view'), {
			position: LatLng,
			pov: {
				heading: 10,
				pitch: 35
			}
		});
		//map.setStreetView(panorama);
	}
	
	function nearByJson(near_id, near_index, LatLng, nearmap ){
		
		var infowindow = new google.maps.InfoWindow({
			content: ''
		});
		
		var chk = 1;
		for (var i = 0; i < near_markers.length; i++) {
          if( near_markers[i].ind == near_index ){
		  	chk = 0;
			near_markers[i].ind = '';
			near_markers[i].data.setMap(null);
		  } 
        }
			
		//Clear Route
		directionsDisplay.setMap(null);
			
		if( !chk ){
			return;
		}
		
		var request = {
			location: LatLng,
			radius: 1000,
			types: [near_id] //e.g. school, restaurant,bank,bar,city_hall,gym,night_club,park,zoo
		};
		
		var service = new google.maps.places.PlacesService(nearmap);
		service.search(request, function(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				for (var i = 0; i < results.length; i++) {
					results[i].html_attributions='';
					dynamicMarker(results[i], near_id, near_index, near_markers, nearmap, infowindow);
				}
			}
		});
	}
	
	function dynamicMarker(places, near_id, near_index, near_markers, map, infoWindow){
		
		var placeLoc = places.geometry.location;
		var marker_t;
		
		marker_t = new google.maps.Marker({
			map: map,
			position: placeLoc,
			icon: { url: dd_ajax_var.assets_url +'/images/markers/'+ near_id +'.png' },
			visible:true
		});

		var tlat2 = placeLoc.lat();
		var tlng2 = placeLoc.lng();
		var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(tlat, tlng), new google.maps.LatLng(tlat2, tlng2));  
		distance = (distance/1000);		
		
		google.maps.event.addListener(marker_t, 'click', function() {
			infoWindow.setContent("<div style=\"padding:10px; line-height:20px; \"><b>Name:</b> "+ places.name +"<br><b>Address:</b> "+ places.vicinity +"<br><b>Distance:</b> "+ distance.toFixed(2) +"km</div>");
			infoWindow.open(map, marker_t);
			
			//For Routing
			var myLatLng = new google.maps.LatLng( tlat, tlng );
			var desLatLng = new google.maps.LatLng( tlat2, tlng2 );
			directionsService.route({
			  origin: myLatLng,
			  destination: desLatLng,
			  travelMode: 'WALKING'
			}, function(response, status) {
				if(status === 'OK'){
					directionsDisplay.setMap(map);
					directionsDisplay.setOptions( { suppressMarkers: true } );
					directionsDisplay.setDirections(response);
				}else{	
					console.log('Directions request failed due to ' + status);
				}
			});
			
		});

		var near_markers_t = {};
		near_markers_t.ind = near_index;
		near_markers_t.data = marker_t;
		near_markers.push(near_markers_t);
	}
	
	function initZoacresPropertyLocationMap() {
		var map;
		var gmap = $( "#zoacres_property_location" );
		var map_lat, map_lang, zoom_lvl;
		map_lat = $("#zoacres_property_latitude").val();
		map_lang = $("#zoacres_property_longitude").val();
		if( map_lat == '' ){
			map_lat	= gmap.attr("data-lat");
			map_lang = gmap.attr("data-lang");
			zoom_lvl = 1;
		}else{
			zoom_lvl = 12;
		}
		
		var PropLatLng = {lat: parseFloat(map_lat), lng: parseFloat(map_lang)};
		map = new google.maps.Map( document.getElementById('zoacres_property_location'), {
			center: PropLatLng,
			zoom: zoom_lvl
        });

		var marker = new google.maps.Marker({
			position: PropLatLng,
			map: map,
        });
		
		google.maps.event.addListener(map, "click", function (e) {
			//lat and lng is available in e object
			var latLng = e.latLng;
			$("#zoacres_property_latitude").val(latLng.lat());
			$("#zoacres_property_longitude").val(latLng.lng());
		});
		
	}

	//Get lat lang
	function success(pos) {
		var crd = pos.coords;
		var MyPoint=  new google.maps.LatLng( pos.coords.latitude, pos.coords.longitude);
		myloc_map.setCenter(MyPoint); 
			
		var myloc_marker = new google.maps.Marker({
			position: MyPoint,
			map: myloc_map,
			icon: dd_ajax_var.my_loc_pointer
		});
	}

	function error(err) {
		console.warn('Map Warning: (' + err.code + '): ' + err.message);
	}
	
	function getmy_location_distance(pos){
		var MyPoint=  new google.maps.LatLng( pos.coords.latitude, pos.coords.longitude);

		var near_json = $(".half-map-doctors-list").data("near");
		
		var i = 0;
		map_lat_long.forEach( function( map_value ) {
			var map_lat = map_value.map_latitude;
			var map_lang = map_value.map_longitude;
			var distance = google.maps.geometry.spherical.computeDistanceBetween(
				new google.maps.LatLng(near_json.lat, near_json.long), 
				new google.maps.LatLng(map_lat, map_lang)
			);  
			//distance = (distance/1000);
			distance = distance * 0.000621371;
			distance = distance.toFixed(2) > 100 ? 'Too Long' : distance.toFixed(2) +" miles";
			//distance = distance.toFixed(2) +"km";
			//console.log(".half-map-search-form .doctor-info-2-col:nth-child("+ (++i) +")");
			$(".half-map-doctors-content .doctor-info-2-col:nth-child("+ (i) +")").find(".doctor-specialities").append('<span class="distance-from-my-loc">'+ distance +' '+ dd_ajax_var.from_loc +'</span>');
			$('a.doctor-point-marker[data-id="'+ (i) +'"]').append('<span class="distance-from-my-loc">'+ distance +' '+ dd_ajax_var.from_loc +'</span>');
			i++;
		});
	}
	
	function getmy_location_forpost(pos){
		var MyPoint=  new google.maps.LatLng( pos.coords.latitude, pos.coords.longitude);
		$("#doctor-from-my-lat").val( pos.coords.latitude );
		$("#doctor-from-my-long").val( pos.coords.longitude );
	}

})( jQuery );
