(function(window) {
	var form = document.getElementById('billing-form');

	form.addEventListener('submit', function(e) {
	  e.preventDefault();
	  var fullName = document.getElementById('full_name'),
	      ccNum = document.getElementById('card_num');
	  
	  if (validator.isEmpty(fullName.value)) {
	    fullName.setCustomValidity('Come on, you have to have a name.');
	  } else {
	    fullName.setCustomValidity('');
	  }

	  if (!validator.isCreditCard(ccNum.value)) {
	    ccNum.setCustomValidity('Sorry, you entered an invalid credit card number');
	  } else {
	    ccNum.setCustomValidity('');
	  }
	  
	}, true);

})(window);