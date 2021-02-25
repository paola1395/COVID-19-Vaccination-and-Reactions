const link = "cleaned_dataset.geojson";
const boundaryLink = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

var streetMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
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
    else if (x >= 500000){
        color = "blue"
    }
    else {
        color = "red"
    }
    return color;
}

// Layer for people fully vaccinated
var fullyVax = L.layerGroup();

d3.json(boundaryLink, function(b){
    var all_coord = b.features;
    // console.log(all_coord);
    d3.json(link, function(data){
        all_data = []
        all_iso = []
        data.features.forEach(d=>{
            if(!all_iso.includes(d.properties.iso_code)) {
                all_iso.push(d.properties.iso_code);
                all_data.push(d)
            }
            
        });
        console.log(all_data);
        console.log(data.features);
        // data.features.forEach(element => {
        all_data.forEach(element => {
            var extra = all_coord.filter(d=>d.properties.ISO_A3===element.properties.iso_code);
            element.properties.extra = extra.map(d=>d.geometry);
            L.geoJSON(element.properties.extra, {
                style: function(feature) {
                    return {
                        color: "white",
                        weight: 1.5,
                        fillOpacity: 0.5,
                        fillColor: chooseColor(element.properties.people_fully_vaccinated)
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
                    layer.bindPopup(element.properties.location + "<hr> " + element.properties.people_fully_vaccinated);
                }, 
            }).addTo(fullyVax);               
        })
    })
})

// Layer for total deaths
var totalDeaths = L.layerGroup();

d3.json(boundaryLink, function(b){
    var all_coord = b.features;
    console.log(all_coord);
    d3.json(link, function(data){
        all_dates = {}
        all_data = []
        all_iso = []
        data.features.forEach(d=>{
            if(!all_iso.includes(d.properties.iso_code)) {
                all_iso.push(d.properties.iso_code);
                all_data.push(d)
            }
            if(typeof all_dates[d.properties.date] === "undefined") all_dates[d.properties.date]=[];
            all_dates[d.properties.date].push(d);
            
        });
        console.log(all_dates);
        console.log(data.features);
        all_data.forEach(element => {
            var extra = all_coord.filter(d=>d.properties.ISO_A3===element.properties.iso_code);
            element.properties.extra = extra.map(d=>d.geometry);
            L.geoJSON(element.properties.extra, {
                style: function(feature) {
                    return {
                        color: "white",
                        weight: 1.5,
                        fillOpacity: 0.5,
                        fillColor: chooseColor(element.properties.total_deaths)
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
                    layer.bindPopup(element.properties.location + "<hr> " + element.properties.total_deaths/element.properties.total_cases * 100);
                }, 
            }).addTo(totalDeaths);               
        })
    })
})


var overlayMaps = {
    "Fully Vaccinated": fullyVax,
    "Total Deaths": totalDeaths
};

var myMap = L.map("map", {
    center: [52.2973333,-46.2556329],
    zoom: 3,
    layers: [streetMap, fullyVax, totalDeaths]
});

L.control.layers(overlayMaps).addTo(myMap);

