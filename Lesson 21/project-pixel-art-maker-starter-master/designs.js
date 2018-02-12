// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function init(){
	$('#sizePicker').submit(function(event){
		event.preventDefault();
		makeGrid();
	});	
}

const table = $('#pixelCanvas');
const inputHeight = $('#input-height');
const inputWidth = $('#input-width');

/**
* @description Make the grid table
*/
function makeGrid() {
	//Delete previous rows.
	table.innerHtml = "";

	const height = inputHeight.value;
	const width = inputWidth.value;

	//Make grid
	for(let i = 0; i < height; i++){
			//isnert row
			const row = table.insertRow(i);
		for(let j=0; j< width; j++){
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

	

