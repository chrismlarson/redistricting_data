var mymap = L.map('mapid').setView([37.5813043, -79.2326541], 7);
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

newVirginiaDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0005.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0006.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0007.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0008.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0009.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0010.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-FederalDistrictsGeoJSONInfo/0011.geojson"
]

currentVirginiaDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0005.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0006.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0007.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0008.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0009.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0010.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Virginia-CurrentFederalCongressionalDistrictsInfo/0011.geojson"
]

function loadNewVirginiaDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in newVirginiaDistrictList) {
    new L.GeoJSON.AJAX(newVirginiaDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function loadCurrentVirginiaDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in currentVirginiaDistrictList) {
    new L.GeoJSON.AJAX(currentVirginiaDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function switchDistrictsOnMap() {
  var x = document.getElementById("districtSelect").value;
  switch(x) {
    case "Proposed Virginia Federal":
      loadNewVirginiaDistrictsIntoMap();
      break;
    case "Current Virginia Federal":
      loadCurrentVirginiaDistrictsIntoMap();
      break;
    default:
      loadNewVirginiaDistrictsIntoMap();
  }
}