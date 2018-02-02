// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){

	const sizePickerForm = $('#sizePicker');
	const inputHeight = $('#inputHeight');
	const inputWeight = $('#inputWeight');
	const pixelCanvas = $('#pixelCanvas');
	const colorPicker = $('#colorPicker');


	sizePickerForm.submit(function(event){
		event.preventDefault();
		makeGrid(inputHeight.val(), inputWeight.val());
	});


	pixelCanvas.on('click', 'td', function(event){
		fillColor($(this), colorPicker.val());
	});

	pixelCanvas.on('mousemove mouseover', 'td', function(event){
		//When pressing left click mouse
		if(event.which === 1 ){
				fillColor($(this), colorPicker.val());
		}
	});

	/**
	* @description Fill a color
	* @constructor
	* @param {object} item - The object that should be colored.
	* @param {string} color - The value of color
	*/
	function fillColor(item, color){
		$(item).css('background-color', color);
	}

	/**
	* @description Make the grid table
	* @constructor
	* @param {number} height - The number of table height
	* @param {number} weight - The number of table weight
	*/
	function makeGrid(height, weight) {

		let tr = '';

		let h = 0;

		while( h < height){

			tr += '<tr>';		

				for(var w = 0; w < weight; w++){
					tr += '<td></td>';
				}

			tr += '</tr>';

			h++;
		}

		pixelCanvas.html(tr);
	}

});

