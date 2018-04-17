document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');

  const centerNY = {lat: 40.712784, lng: -74.005941};
  const centerCC = {lat: 55.946962, lng: -3.201958}
  const centerTT = {lat: 16.4633, lng: -3.0034 };
  const ccString = '<div id="infoWindow">'+
            '<h1>CodeClan</h1>'+
            '<div>'+
            '<p><b>CodeClan</b>, also referred to as <b>C-land</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Edinburgh Castle. It has many springs, waterholes, '+
            'rock caves and ancient paintings. CodeClan is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Webside: EdinburghSite, <a href="https://www.codeclan.com">'+
            'https://www.codeclan.com</a> '+
            '</p>'+
            '</div>'+
            '</div>';

  const mainMap = new MapWrapper(mapContainer, centerCC, 8.5);

  mainMap.addMarker(centerNY);
  mainMap.addMarkerWithInfo(centerCC,ccString);
  //mainMap.addClickListener();

    const handleTimbuktu = function () {
      const lat = 16.4633;
      const lng = -3.0034;
      mainMap.moveToLocation(lat, lng);
      const coords = {lat: 16.5000, lng: -3.0034};
      mainMap.addMarkerWithInfo(coords, "You are HERE!")
      mainMap.zoomIn();
    };

  const timbuktu = document.querySelector('#timbuktu');
  timbuktu.addEventListener('click', handleTimbuktu);

  const handleWhereAmI = function () {
    if ("geolocation" in navigator) {
      console.log("You have geoLoction turned ON!");

      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("You get your position as:", yourLat, yourLng);
        const yourLat = position.coords.latitude;
        const yourLng = position.coords.longitude;
        mainMap.moveToLocation(yourLat, yourLng);
        //mainMap.addMarkerWithInfo(yourLat, yourLng, "You are HERE!")
        //mainMap.zoomIn();
// NOT WORKING??????????????????????
      });
    } else {
      console.log("You DO NOT have geoLoction turned ON!");

    }
  };

  const whereAmI = document.querySelector('#where-am-i');
  whereAmI.addEventListener('click', handleWhereAmI);

}); // end of DOMContentLoaded listener
