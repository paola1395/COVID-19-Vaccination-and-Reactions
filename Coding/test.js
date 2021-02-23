var link = "boundary.geojson";

var myMap = L.map("map", {
    center: [52.2973333,-46.2556329],
    zoom: 3
});

function chooseColor (x) {
  var color = "";
  if (x >= 3000000) {
      color = "green"
  }
  else if (x >= 2500000) {
      color = "orange"
  }
  else if (x >= 2000000){
      color = "yellow"
  }
  else if (x >= 1500000){
      color = "purple"
  }
  else if (x >= 1000000){
      color = "blue"
  }
  else {
      color = "red"
  }
  return color;
}

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// d3.json(link, function(data) {
//     console.log(data.features);

//     L.geoJSON(data, {
//       style: function (feature) {
//         return {
//           weight: 1.5,
//           fillOpacity: 0.5,
//           fillColor: chooseColor(feature.properties.people_fully_vaccinated)
//         }
//       },
//         // pointToLayer: function(feature, latlng){
//         //     return L.marker(latlng, {
//         //         radius: feature.properties.total_vaccinations,
//         //         fillColor: "red",
//         //         color: "white",
//         //         weight: 1,
//         //         opacity: 0.6,
//         //         fillOpacity: 0.6
//         //     })
//         // },
//       onEachFeature: function(feature, layer){
//           layer.bindPopup(feature.properties.location + "<hr> " +feature.properties.people_fully_vaccinated);
//       }
//     }).addTo(myMap);

// });

// var boundaryLink = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"

d3.json(link, function(data) {
    console.log(data.features);
    L.geoJSON(data, {
        style: function(feature) {
            return {
                color: "blue",
                weight: 1.5,
                fillOpacity: 0.5,
                fillColor: chooseColor(feature.properties.people_fully_vaccinated)
            }
        },
        onEachFeature: function(feature, layer) {
            layer.on({
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    });
                },
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.5
                    });
                },
                click: function(event) {
                    myMap.fitBounds(event.target.getBounds());
                }
            });
        },
    }).addTo(myMap);
});