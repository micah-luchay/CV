var map = L.map('mapID', { // create the map that you pan
	attributionControl: false,
	center: [34.02, -81.05],
	zoom: 11,
	zoomDelta: 0.5
});

var attribution = L.control.attribution({
	prefix: 'US Census Bureau (2019), USGS, and Leaflet'
	
}).addTo(map);

var columbiaMosiac = L.layerGroup(); // create a group layer to add all the Quadangles
var layersControl = L.control.layers().addTo(map); // add a control panel for the layers/basemap

var BlythewoodQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Blythewood_20200813_TM.png', [[34.25, -81], [34.125, -80.875]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	}); // save the quadangles to a variable

var ColumbiaNorthQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Columbia_North_20200817_TM.png', [[34.125, -81.125], [34, -81]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

var FortJacksonNorthQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Fort_Jackson_North_20200813_TM.png', [[34.125, -81], [34, -80.875]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

var FortJacksonSouthQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Fort_Jackson_South_20200805_TM.png', [[34, -81], [33.875, -80.875]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

var IrmoQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Irmo_20200817_TM.png', [[34.125, -81.25], [34, -81.125]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

var IrmoNEQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Irmo_NE_20200817_TM.png', [[34.25, -81.125], [34.125, -81]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

var LexingtonQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Lexington_20200811_TM.png', [[34, -81.25], [33.875, -81.125]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

var RichtexQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Richtex_20200817_TM.png', [[34.25, -81.25], [34.125, -81.125]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

var SouthwestColumbiaQD = L.imageOverlay('Data\\Topographic Map Tile\\Working\\Cropped\\SC_Southwest_Columbia_20200811_TM.png', [[34, -81.125], [33.875, -81]], {
	errorOverlayUrl: 'Data\\Icons\\X.png',
	zIndex: -1
	});

columbiaMosiac.addLayer(BlythewoodQD); // add the quadangles to the layer group
columbiaMosiac.addLayer(ColumbiaNorthQD);
columbiaMosiac.addLayer(FortJacksonNorthQD);
columbiaMosiac.addLayer(FortJacksonSouthQD);
columbiaMosiac.addLayer(IrmoQD);
columbiaMosiac.addLayer(IrmoNEQD);
columbiaMosiac.addLayer(LexingtonQD);
columbiaMosiac.addLayer(RichtexQD);
columbiaMosiac.addLayer(SouthwestColumbiaQD);

layersControl.addOverlay(columbiaMosiac, '2020 USGS Topographic Mosiac');




var info = L.control(); // viewport for the census data
info.setPosition('bottomleft'); // set the viewport to the bottom left corner of the map

info.onAdd = function(map) {
	this._div = L.DomUtil.create('div', 'info'); // create a div element
	this._div.style.backgroundColor = '#FFFFFF'; // set the style for the div
	this._div.style.padding = '5px';
	this._div.style.borderStyle = 'outset';
	this._div.style.borderWidth = '3px';
	this._div.style.borderColor = '#4873b7';
	this.update('Hover over a block');
	return this._div;
};

info.update = function(value) {
	this._div.innerHTML = value; // a function that updates the hmtl text for the div
};

info.addTo(map);

var legend = L.control();
legend.setPosition('bottomright');

legend.onAdd = function(map) {
	this._div = L.DomUtil.create('div', 'legend'); // create a div element
	this._div.style.padding = '5px'; // set the style for the div
	this._div.style.borderStyle = 'outset';
	this._div.style.borderWidth = '3px';
	this._div.style.borderColor = '#4873b7';
	this._div.style.backgroundColor = '#FFFFFF';
	
	var labels = ['#f5d1ad', '#f5b778','#f59c42', '#d18a42', '#ad7842' , '#785d42', '#424242' ];
	
	// style the legend	
	this._div.innerHTML =  '<p style = "    font-size:  ' + '30px' + '; margin: ' + '0' + ' "> Legend </p>' + '<br>' + 
						   ' <div style = "    background:  ' + labels[0] +  '; width:' + '15px' + '; height: ' + '15px'   + '; display: ' + 'inline-block' + '; border-style: ' + 'solid' + '; border-width: ' + '1px' + '	"   >     </div> ' + '<span> Median Age < 15 </span>' + '<br> ' +  
						   ' <div style = "    background:  ' + labels[1] +  '; width:' + '15px' + '; height: ' + '15px'   + '; display: ' + 'inline-block' + '; border-style: ' + 'solid' + '; border-width: ' + '1px' + '	"   >     </div> ' + '<span> Median Age 15 - 20 </span>' + '<br> ' + 
						   ' <div style = "    background:  ' + labels[2] +  '; width:' + '15px' + '; height: ' + '15px'   + '; display: ' + 'inline-block' + '; border-style: ' + 'solid' + '; border-width: ' + '1px' + '	"   >     </div> ' + '<span> Median Age 20 - 25 </span>' + '<br> ' + 
						   ' <div style = "    background:  ' + labels[3] +  '; width:' + '15px' + '; height: ' + '15px'   + '; display: ' + 'inline-block' + '; border-style: ' + 'solid' + '; border-width: ' + '1px' + '	"   >     </div> ' + '<span> Median Age 25 - 30 </span>' + '<br> ' + 
						   ' <div style = "    background:  ' + labels[4] +  '; width:' + '15px' + '; height: ' + '15px'   + '; display: ' + 'inline-block' + '; border-style: ' + 'solid' + '; border-width: ' + '1px' + '	"   >     </div> ' + '<span> Median Age 35 - 40 </span>' + '<br> ' + 
						   ' <div style = "    background:  ' + labels[5] +  '; width:' + '15px' + '; height: ' + '15px'   + '; display: ' + 'inline-block' + '; border-style: ' + 'solid' + '; border-width: ' + '1px' + '	"   >     </div> ' + '<span> Median Age 40 - 60 </span>' + '<br>' +
						   ' <div style = "    background:  ' + labels[6] +  '; width:' + '15px' + '; height: ' + '15px'   + '; display: ' + 'inline-block' + '; border-style: ' + 'solid' + '; border-width: ' + '1px' + '	"   >     </div> ' + '<span> Median Age > 60 </span>' ;
	return this._div;
};

legend.addTo(map);


function updateInfo(e) { // when a blockgroup is hovered over, pass in the event object of feature
	var medianAge = e.target.feature.properties.MedianAge; // grab the census data from the feature
	var medianWhiteAge = e.target.feature.properties.MedianWhite;
	var medianBlackAge = e.target.feature.properties.MedianBlack;
	var medianIndian = e.target.feature.properties.MedianIndianAlaska;
	var medianAsian = e.target.feature.properties.MedianAsian;
	var medianHawaiian = e.target.feature.properties.MedianHawaiianPacificer;
	var medianHispanic = e.target.feature.properties.MedianHispanic;
	
	info.update('Median age: ' + medianAge + '<br>' + // update the viewport's innerHMTL text
				'White Median Age: ' + medianWhiteAge + '<br>' +
				'Black Median Age: ' + medianBlackAge + '<br>' +
				'Native Indian/Alaskan Median Age: ' + medianIndian + '<br>' +
				'Asian Median Age: ' + medianAsian + '<br>' +
				'Hawaiian/Pacific Islander Median Age: ' + medianHawaiian + '<br>' +
				'Hispanic Median Age: ' + medianHispanic + '<br>'
				);
}

function highlightFeature(e) {
		var feature = e.target;
		feature.bringToFront(); // bring the feature to the front to pop out
		
		feature.setStyle({ // when the block group is hovered over, change the border color and weight of the border
			color: '#FFFFFF',
			weight: 3
			
		});
		
		updateInfo(e);
}

function unHighlightFeature(e) {
		var feature = e.target; // when the block group is moused off of, change the border color and weight back to it's original specs
		feature.bringToBack() // bring the feature back so it doesn't pop out
		feature.setStyle({
			color: '#000000',
			weight: 1
		});
}

function determineColorDemographics(age){ // determine the color of the block based on the age
	
	return age < 15 ? '#ffcc99' : age < 20 ? '#ffa64d' : age < 25 ? '#ff8000' : age < 30 ? '#cc6600' : age < 35 ? '#994d00' : age < 60 ? '#4d2600' : '#000000';
}

function onEachFeatureBlockGroups(feature, layer) {
	layer.on({
		mouseover: highlightFeature, // upon the event of mouseover on a block element, call this function
		mouseout: unHighlightFeature
	});
	
}

function styleDemographics(feature) {
	var medianAge = feature.properties.MedianAge; // grab the median age for the block group
	
	return {
		color: '#000000',
		fillColor: determineColorDemographics(medianAge), // call a function to determine color based on age
		fillOpacity: 0.7,
		weight: 1
	};
	
}

var blockGroups = L.geoJSON(SCBlockGroupDemographicData_Richland_Lexington, {
	onEachFeature: onEachFeatureBlockGroups, // onEachFeature is more for popups/interaction purposes
	style: styleDemographics // style is for... well, style!
});


layersControl.addOverlay(blockGroups, 'Block Groups'); // add the block groups to the layers control
