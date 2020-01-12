var mymap = L.map('mapid').setView([31.4072321, -99.4062266], 6);
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
    currentColorIndex = currentColorIndex % colorList.length
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

newTexasDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0005.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0006.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0007.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0008.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0009.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0010.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0011.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0012.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0013.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0014.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0015.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0016.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0017.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0018.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0019.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0020.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0021.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0022.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0023.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0024.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0025.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0026.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0027.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0028.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0029.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0030.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0031.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0032.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0033.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0034.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0035.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-FederalDistrictsGeoJSONInfo/0036.geojson"
]

currentTexasDistrictList = [
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0001.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0002.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0003.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0004.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0005.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0006.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0007.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0008.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0009.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0010.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0011.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0012.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0013.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0014.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0015.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0016.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0017.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0018.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0019.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0020.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0021.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0022.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0023.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0024.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0025.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0026.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0027.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0028.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0029.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0030.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0031.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0032.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0033.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0034.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0035.geojson",
  "https://raw.githubusercontent.com/chrismlarson/redistricting_data/master/2010-Texas-CurrentFederalDistrictsGeoJSONInfo/0036.geojson"
]

function loadNewTexasDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in newTexasDistrictList) {
    new L.GeoJSON.AJAX(newTexasDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function loadCurrentTexasDistrictsIntoMap() {
  layerGroup.clearLayers();
  for(index in currentTexasDistrictList) {
    new L.GeoJSON.AJAX(currentTexasDistrictList[index], {style: districtStyle}).addTo(layerGroup);
  }
}
function switchDistrictsOnMap() {
  var x = document.getElementById("districtSelect").value;
  switch(x) {
    case "Proposed Texas Federal":
      loadNewTexasDistrictsIntoMap();
      break;
    case "Current Texas Federal":
      loadCurrentTexasDistrictsIntoMap();
      break;
    default:
      loadNewTexasDistrictsIntoMap();
  }
}