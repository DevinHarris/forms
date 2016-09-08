(function(window) {

	var shippingForm = document.getElementById('shipping-form'),
	formInputs = document.getElementsByTagName('input');

	shippingForm.addEventListener('submit', function(e) {
		e.preventDefault();

		Array.prototype.forEach.call(formInputs, function(input) {
			if (validator.isEmpty(input.value)) {
				input.setCustomValidity('Sorry, this field cannot be empty.');
			} else {
				input.setCustomValidity('');
			}
		});
	});

	
})(window);