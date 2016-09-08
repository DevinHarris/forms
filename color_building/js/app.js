(function(window) {
	var colorInputs = document.querySelectorAll('input[type=range]'),
	results = document.querySelector('#color-output'),
	container = document.querySelector('.container');
	colorObj = {
		red: 0,
		green: 0,
		blue: 0,
		alpha: 0
	};

	Array.prototype.forEach.call(colorInputs, function(color) {
		
		color.addEventListener('change', function(e) {
			
			for (var prop in colorObj) {
				if (color.id === prop) {
					colorObj[prop] = color.value;
				}
			}

			results.textContent = "Your color is: " + " red: " + colorObj.red + " green: " + colorObj.green + " blue: " + colorObj.blue + " alpha: " + colorObj.alpha +
			"Completed: " + "rgba(" + colorObj.red + "," + colorObj.green + "," + colorObj.blue + "," + colorObj.alpha + ");";

			container.style.backgroundColor = "rgba(" + colorObj.red + "," + colorObj.green + "," + colorObj.blue + "," + colorObj.alpha + ")";
			
		});

	});

})(window);