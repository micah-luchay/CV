google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(length, slope, downstreamElev) {
	var parsedLength = parseFloat(length); // convert the parameters to float, just to be sure
	var parsedSlope = parseFloat(slope); // convert the parameters to float, just to be sure
	var parsedDownstreamElev = parseFloat(downstreamElev); // convert the parameters to float, just to be sure
	
	var heightRise = Math.sin(parsedSlope * Math.PI / 180) * parsedLength; // convert the slope into degrees for trigonometric application
	var upstreamElev = parsedDownstreamElev + heightRise; // calculate the upstream elevation by adding the lower elevation
	document.getElementById("dashboardUpstreamElevDisplay").innerHTML = upstreamElev.toFixed(2) + ' ft.';
	/*
	var graphData = google.visualization.arrayToDataTable([
	['Length in Feet', 'Elevation (ft.)'],
	[0, parsedDownstreamElev],
	[parsedLength, upstreamElev]
	]);
	*/
	var graphData = new google.visualization.DataTable();
	graphData.addColumn('number', 'Horizontal (ft.)');
	graphData.addColumn('number', 'Sewer Main Elevation (ft.)');
	graphData.addColumn({type: 'string', role: 'tooltip'});
	
	graphData.addRows([
	[0, parsedDownstreamElev, 'Horizontal: ' + 0 + ' ft. \n Vertical: ' + parsedDownstreamElev + ' ft.'],
	[parsedLength, upstreamElev, 'Horizontal: ' + parsedLength + ' ft. \n Vertical: ' + upstreamElev.toFixed(2) + ' ft.']
	]);
	
	var options = {
		height: 300,
		width: 1500,
		
		legend: {
			position: 'none',
		},
		
		hAxis: {
			format: 'long',
			title: 'Horizontal (ft.)'
		},
		
		title: 'Sewer Main Profile',
		
		vAxis: { 
			title: 'Elevation (ft.)'
		},
			
	};
	
	var chart = new google.visualization.LineChart(document.getElementById('graph-container'));
	chart.draw(graphData, options);
}

function displayData() {
	var length = document.getElementById("lengthInput").value;
	var slope = document.getElementById("slopeInput").value;
	var downstreamElev = document.getElementById("DSElevationInput").value;

	if ( !length || !slope || !downstreamElev) { // check to see if the user left blank fields in the form
		errorMessage(); 
	}
	
	else {
		document.getElementById("errorMessageLocation").innerHTML = '';
	}
	
	drawChart(length, slope, downstreamElev); // draw the line chart
	document.getElementById("dashboardUpstreamElevDisplay").style.color = 'red';
}

function errorMessage() { // called if the user left blank fields in the form
	document.getElementById("errorMessageLocation").innerHTML = 'Enter all the info';
	document.getElementById("errorMessageLocation").style.color = 'red';
}