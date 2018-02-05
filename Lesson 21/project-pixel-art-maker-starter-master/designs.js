// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function init(){
	$('#sizePicker').submit(function(event){
		event.preventDefault();
		makeGrid();
	});	
}

/**
* @description Make the grid table
*/
function makeGrid() {
	const table = document.getElementById('pixelCanvas');
	
	//Delete previous rows.
	while(table.rows.length > 0){
		table.deleteRow(0);
	}

	//Make grid
	for(let i = 0; i < $('#inputHeight').val(); i++){
			//isnert row
			const row = table.insertRow(i);
		for(let j=0; j< $('#inputWeight').val(); j++){
			//insert cell
			const cell = row.insertCell(j);
			//add event listener each cell.
			cell.addEventListener('click', fillColor);
		}
	}
}

/**
* @description Fill a color
* @param {object} item - The object that should be colored.
*/
function fillColor(){
	$(this).css('background-color', $('#colorPicker').val());
}

$(document).ready(init);

	

