(function(window) {
	var questionForm = document.querySelector('.question-form'),
	otherColor = document.querySelector('#other-color');
	radioInputs = document.querySelectorAll('input[name=color]');

	questionForm.addEventListener('submit', function(e) {
		e.preventDefault();

		Array.prototype.forEach.call(radioInputs, function(radio) {
			if (!radio.checked) {
				radio.setCustomValidity('Please select an option :)');
			} else {
				radio.setCustomValidity('');
			}

			if (!radio.checked && validator.isEmpty(otherColor.value)) {
				otherColor.setCustomValidity('Hmm. Seems like you choose "other" but didn\'t enter one.');
			} else {
				otherColor.setCustomValidity('');
			}
			
		});
	});


})(window);