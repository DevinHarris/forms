(function(window) {

	var searchForm = document.getElementById('search-form'),
	search = document.getElementById('search');

	searchForm.addEventListener('submit', function(e) {
		e.preventDefault();

		if (validator.isEmpty(search.value)) {
			search.setCustomValidity('You have to enter a term to search for :)');
		} else {
			search.setCustomValidity('');
		}

		if (validator.lacks(search.value, ["ass", "bitch", "cunt", "ass"])) {
			search.setCustomValidity('Hmm. Seems like you\'ve entered a bad search term');
		} else {
			search.setCustomValidity('');
		}
	});


})(window);