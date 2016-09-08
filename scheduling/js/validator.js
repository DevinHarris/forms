(function() {

  var validator = {};

  // Check email addresses

  validator.isEmailAddress = function(input) {
    if (typeof input !== 'string') {
      return false;
    }

    if (input.indexOf('@') === -1) {
      return false;
    }

    var emailSplit = input.split('@'),
      emailStr = emailSplit[0],
      domain = emailSplit[1];

    if (domain.indexOf('.') === -1) {
      return false;
    }

    return true;
  };

  // Check for empty input

  validator.isEmpty = function(input) {
    if (input === null || input === undefined) {
      return false;
    }

    var inputTrim = input.trim();

    if (inputTrim === '') {
      return true;
    }

    return false;
  };

  // Checks if a string contains a word(s)

  validator.contains = function(input, words) {
    var inputLower = input.toLowerCase();

    for (var i = 0; i < words.length; i++) {
      if (inputLower.indexOf(words[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  // Checks if a banned word is used in a string

  validator.lacks = function(input, words) {
    var inputLower = input.toLowerCase();

    for (var i = 0; i < words.length; i++) {
      if (inputLower.indexOf(words[i]) === -1) {
        return true;
      }
    }
    return false;
  };

  // Checks if string is less than specified length

  validator.isLength = function(input, n) {
    if (input.length <= n) {
      return true;
    } else {
      return false;
    }
  };

  // Checks if string is greater than specified length

  validator.isOfLength = function(input, n) {
    if (input.length >= n) {
      return true;
    } else {
      return false;
    }
  };

  // RGB color validator

  validator.isRGB = function(input) {
    if (input.indexOf('rgb(') === -1) {
      return false;
    }
    var RGBnums = input.substr(4, 12),
      RGBsplit = RGBnums.split(","),
      RGBarr = [];

    RGBsplit.map(function(item) {
      RGBarr.push(parseInt(item));
    });

    for (var i = 0; i < RGBarr.length; i++) {

      if (RGBarr[i] > 255 || RGBarr[i] < 0) {
        return false;
      }
    }

    return true;
  };

  validator.lessThanWords = function(input, n) {
    return input.split(" ").length <= n ? true : false;
  };

  validator.greaterThanWords = function(input, n) {
    return input.split(" ").length >= n ? true : false;
  };

  // Basic check for correct credit card numbers

  validator.isCreditCard = function(input) {
    var ccNum = '';
    alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    if (input.indexOf("-") !== -1) {
      var ccNumSplit = input.split("-");
      ccNumSplit.map(function(value) {
        if (value.length !== 4) {
          return false;
        } else {
          ccNum = ccNumSplit.join("");
        }
      });
    } else {
      ccNum = input.toUpperCase().split("");
    }

    if (ccNum.length > 16 || ccNum.length < 16) {
      return false;
    }

    for (var i = 0; i < ccNum.length; i++) {
      if (alphaNum.indexOf(ccNum[i]) === -1) {
        return false;
      }
    }

    return true;
  };

  validator.isAlphaNumeric = function(input) {
    var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789",
      inputSplit = input.toLowerCase().split("");

    for (var i = 0; i < inputSplit.length; i++) {
      if (alphaNum.indexOf(inputSplit[i]) === -1) {
        return false;
      }
    }

    return true;
  };

  validator.isColor = function(input) {
    var colorType = input.substr(0, 4);

    switch (colorType) {
      case 'rgb(':
        validator.isRGB(input);
        break;

      case 'hex(':
        validator.isHex(input);
        break;

      case 'hsl(':
        validator.isHSL(input);
        break;

      default:
        return false;
    }
  };

  validator.isHex = function(input) {
    var hexTestStr = input.substr(1).toUpperCase().split(''),
      hexChars = 'ABCDEF0123456789';
    if (input.charAt(0) !== '#') {
      return false;
    }

    if (hexTestStr.length !== 3 && hexTestStr.length !== 6) {
      return false;
    }

    for (var i = 0; i < hexTestStr.length; i++) {
      if (hexChars.indexOf(hexTestStr[i]) === -1) {
        return false;
      }
    }

    return true;
  };

  validator.isComposedOf = function(input, strings) {
    for (var i = 0; i < strings.length; i++) {
      if (input.indexOf(strings[i]) > -1) {
        return true;
      }
    }
  };

  validator.wordCount = function(input) {

    var possibleSeps = [".", "-", " "],
      wordsArr = [];

    for (var i = 0; i < possibleSeps.length; i++) {
      if (input.indexOf(possibleSeps[i]) !== -1) {
        var split = input.split(possibleSeps[i]);

        for (var j = 0; j < split.length; j++) {
          if (split[j].length > 0) {
            wordsArr.push(split[j]);
          }
        }
      }
    }

    return wordsArr.length;
  };

  validator.isDate = function(input) {
    var dateParsed = Date.parse(input);

    if (isNaN(dateParsed)) {
      return false;
    }

    return true;
  };

  validator.isBeforeDate = function(input, reference) {
    if (isNaN(Date.parse(input)) || isNaN(Date.parse(reference))) {
      throw new Error("The inputs must be valid dates");
    }

    return input > reference;
  };

  validator.isAfterDate = function(input, reference) {
    if (isNaN(Date.parse(input)) || isNaN(Date.parse(reference))) {
      throw new Error("The inputs must be valid dates");
    }

    return input < reference;
  };

  validator.isBeforeToday = function(input) {
    var today = Date.now();
    if (isNaN(Date.parse(input))) {
      throw new Error("The input must be valid dates");
    }

    return today > input;
  };

  validator.isAfterDate = function(input) {
    var today = Date.now();
    if (isNaN(Date.parse(input))) {
      throw new Error("The input must be valid dates");
    }

    return today < input;
  };

  // IMPROVE

  validator.isPhoneNumber = function(input) {
    var possSeps = ["-", "."],
      pnArray;

    for (var i = 0; i < possSeps.length; i++) {
      if (input.indexOf(possSeps[i]) !== -1) {
        pnArray = input.split(possSeps[i]);
      }
    }

    pnArray.map(function(num) {
      if (isNaN(num)) {
        return false;
      }
    });

    return true;
  };

// expose validator to global scope

  window.validator = validator;

  // FIX
/*  function isHSL(input) {
    if (input.indexOf("hsl(") === -1) {
      return false;
    }

    var HSLinput = input.substr(4, 12),
      HSLvalues = HSLinput.split(","),
      HSLNumValues = [],
      hue;

    HSLvalues.map(function(value) {
      if (value < 1 && value > 0) {
        HSLNumValues.push(parseFloat(value));
      } else {
        HSLNumValues.push(parseInt(value));
      }
    });

    console.log(HSLNumValues);

    if (HSLNumValues.length > 3) {
      return false;
    }

    hue = HSLNumValues[0];

    if (hue > 360 || hue < 0) {
      return false;
    }

    for (var i = 1; i < HSLNumValues.length; i++) {
      console.log(HSLNumValues[i]);
    }

  }

  console.log(isHSL("hsl(234,342,432)")); // false
  console.log(isHSL("hsl(234,342,432,231)")); // false
  console.log(isHSL("hsl(377,434,534)")); // false
  console.log(isHSL("hsl(320,1,0.5)")); */

})(window);