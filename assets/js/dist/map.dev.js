"use strict";

var map;
var marker;
var geocoder;
var responseDiv;
var response;
var coordinates = {
  lat: 55.759679,
  lng: 37.636804
};

function initMap() {
  var styledMapType = new google.maps.StyledMapType([{
    "elementType": "geometry",
    "stylers": [{
      "color": "#f5f5f5"
    }]
  }, {
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#f5f5f5"
    }]
  }, {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#bdbdbd"
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#eeeeee"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e5e5e5"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
      "color": "#dadada"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }, {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e5e5e5"
    }]
  }, {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{
      "color": "#eeeeee"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#c9c9c9"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }], {
    name: "Сепия"
  });
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: coordinates,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "styled_map"]
    }
  });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
  geocoder = new google.maps.Geocoder();
  var contentString = "";
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker = new google.maps.Marker({
    map: map,
    position: coordinates,
    animation: google.maps.Animation.DROP,
    icon: '/assets/images/icons/marker.svg'
  });
  google.maps.event.addListener(marker, 'click', function () {// infowindow.open(map,marker);
  });
}