var mymap = L.map('mapid').setView([43.7649208, -87.849895], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hyaXNsYXJzb24iLCJhIjoiY2pxYTE2Z3QyMDJyZjQ0bGJqZTQwaXAyZSJ9.sPHgwlSNVjjVK-o9gAwrXg'
}).addTo(mymap);
var layerGroup = L.layerGroup().addTo(mymap);

function districtStyle(feature) {
  currentColorIndex = feature.geometry.properties.number
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
        fillColor: getColor(),
        fillOpacity: .3,
        color: getColor(),  //Outline color
        weight: 3,
        opacity: 1,
        
    };
}

newMichiganDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0005.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0006.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0007.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0008.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0009.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0010.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0011.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0012.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0013.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-FederalDistrictsGeoJSONInfo/0014.geojson"
]

currentMichiganDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0005.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0006.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0007.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0008.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0009.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0010.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0011.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0012.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0013.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Michigan-CurrentFederalCongressionalDistrictsInfo/0014.geojson"
]

function loadNewMichiganDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in newMichiganDistrictList) {
    new L.GeoJSON.AJAX(newMichiganDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function loadCurrentMichiganDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in currentMichiganDistrictList) {
    new L.GeoJSON.AJAX(currentMichiganDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function switchDistrictsOnMap() {
  var x = document.getElementById("districtSelect").value;
  switch(x) {
    case "New Michigan Federal":
      loadNewMichiganDistrictsIntoMap();
      break;
    case "Current Michigan Federal":
      loadCurrentMichiganDistrictsIntoMap();
      break;
    default:
      loadNewMichiganDistrictsIntoMap();
  }
}