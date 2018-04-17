const MapWrapper = function(container, centerStart, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: centerStart,
    zoom: zoom
  });

  this.markers = [];
}; // end MapWrapper constructor

MapWrapper.prototype.zoomIn = function () {
  this.googleMap.zoom = 14;
}

MapWrapper.prototype.moveToLocation = function (lat, lng) {
   var newCenter = new google.maps.LatLng(lat, lng);
   this.googleMap.panTo(newCenter);
 }

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords
  });
  this.markers.push(marker);
};


MapWrapper.prototype.addMarkerWithInfo = function (coords, aContentString) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords
  });
  const contentString = aContentString;

  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', () => {
    infowindow.open(this.googleMap, marker);
  });
}












MapWrapper.prototype.addClickListener = function () {
  google.maps.event.addListener(this.googleMap, 'click', (event) => {
  // google.maps.event.addListener(this.googleMap, 'click', function (event) {  // to keep this. as the MapWrapper rather than change to the googleMap.
    const clickLat = event.latLng.lat();
    const clickLng = event.latLng.lng();
    this.addMarker({lat: clickLat, lng: clickLng});
  });
};
