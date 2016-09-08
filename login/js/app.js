(function(window) {
	var loginForm = document.getElementById('login-form'),
	username = document.querySelector('.username'),
	password = document.querySelector('.password');

	loginForm.addEventListener('submit', function(e) {
		e.preventDefault();

		if (validator.isEmpty(username.value)) {
			username.setCustomValidity('Sorry, your need to enter your Username.');
		}

		if (validator.isEmpty(password.value)) {
			password.setCustomValidity('You haven\'t entered your password!');
		} 

		console.log(e);
	}, false);
})(window);