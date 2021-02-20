var link = "dataset.geojson";

var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.json(link, function(data) {
    console.log(data.features);

    L.geoJSON(data, {
        pointToLayer: function(feature, latlng){
            return L.circleMarker(latlng, {
                radius: feature.properties.total_vaccinations/200000,
                fillColor: "red",
                color: "white",
                weight: 1,
                opacity: 0.6,
                fillOpacity: 0.6
            })
        },
        onEachFeature: function(feature, layer){
            layer.bindPopup(feature.properties.location + "<hr> " +feature.properties.total_vaccinations);
        }
    }).addTo(myMap);

});

