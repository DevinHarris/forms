(function(window) {

	function getById(node) {
		return document.getElementById(node);
	}

	var form = getById('schedule-form'),
	date = getById('date'),
	email = getById('email'),
	phNumber = getById('phone-number');

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		// check if date is valid

		if (validator.isEmpty(date.value) || !validator.isDate(date.value)) {
			date.setCustomValidity('Hey, you either left this field empty or the date is incorrent. Please try again!');
		} else {
			date.setCustomValidity('');
		}

		if (validator.isEmpty(email.value) || !validator.isEmailAddress(email.value)) {
			email.setCustomValidity('Hey, you either left this field empty or your email is incorrent. Please try again!');
		} else {
			email.setCustomValidity('');
		}

		if (validator.isEmpty(phNumber.value) || !validator.isPhoneNumber(phNumber.value)) {
			phNumber.setCustomValidity('Hey, you either left this field empty or your phone number is incorrent. Please try again!');
		}

		console.log(e);
	});
})(window);