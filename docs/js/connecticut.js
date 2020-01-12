var mymap = L.map('mapid').setView([41.5776064,-72.591541], 9);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hyaXNsYXJzb24iLCJhIjoiY2pxYTE2Z3QyMDJyZjQ0bGJqZTQwaXAyZSJ9.sPHgwlSNVjjVK-o9gAwrXg'
}).addTo(mymap);
var layerGroup = L.layerGroup().addTo(mymap);

function districtStyle(feature) {
  currentColorIndex = feature.geometry.properties.number - 1
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
  if (currentColorIndex >= colorList.length) {
    currentColorIndex = 0
  }
  function getColor() {
    return colorList[currentColorIndex]
  };
    return {
        fillColor: getColor(),
        fillOpacity: .3,
        color: getColor(),  //Outline color
        weight: 3,
        opacity: 1,
        
    };
}

newConnecticutDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-FederalDistrictsGeoJSONInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-FederalDistrictsGeoJSONInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-FederalDistrictsGeoJSONInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-FederalDistrictsGeoJSONInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-FederalDistrictsGeoJSONInfo/0005.geojson"
]

currentConnecticutDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-CurrentFederalCongressionalDistrictsInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-CurrentFederalCongressionalDistrictsInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-CurrentFederalCongressionalDistrictsInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-CurrentFederalCongressionalDistrictsInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Connecticut-CurrentFederalCongressionalDistrictsInfo/0005.geojson"
]

function loadNewConnecticutDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in newConnecticutDistrictList) {
    new L.GeoJSON.AJAX(newConnecticutDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function loadCurrentConnecticutDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in currentConnecticutDistrictList) {
    new L.GeoJSON.AJAX(currentConnecticutDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function switchDistrictsOnMap() {
  var x = document.getElementById("districtSelect").value;
  switch(x) {
    case "Proposed Connecticut Federal":
      loadNewConnecticutDistrictsIntoMap();
      break;
    case "Current Connecticut Federal":
      loadCurrentConnecticutDistrictsIntoMap();
      break;
    default:
      loadNewConnecticutDistrictsIntoMap();
  }
}