var mymap = L.map('mapid').setView([43.7649208, -87.849895], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hyaXNsYXJzb24iLCJhIjoiY2pxYTE2Z3QyMDJyZjQ0bGJqZTQwaXAyZSJ9.sPHgwlSNVjjVK-o9gAwrXg'
}).addTo(mymap);

var currentColorIndex=-1;
function districtStyle(feature) {
  currentColorIndex += 1
  colorList = [
      'dodgerblue',
      'green',
      'purple',
      'orange',
      'firebrick',
      'saddlebrown',
      'olive',
      'limegreen',
      'mediumpurple',
      'orangered',
      'indigo',
      'turquoise',
      'midnightblue',
      'mediumvioletred'
                ]
  if (currentColorIndex > colorList.length) {
    currentColorIndex = 0
  }
  function getColor() {
    return colorList[currentColorIndex]
  };
    return {
        fillColor: getColor(feature.properties.number),
        fillOpacity: .3,
        color: getColor(feature.properties.number),  //Outline color
        weight: 3,
        opacity: 1,
        
    };
}

new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0001.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0002.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0003.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0004.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0005.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0006.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0007.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0008.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0009.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0010.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0011.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0012.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0013.geojson", {style: districtStyle}).addTo(mymap);
new L.GeoJSON.AJAX("https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0014.geojson", {style: districtStyle}).addTo(mymap);