x = 0;
y = "";
while (! y.includes(String.fromCharCode(x))) {
    y+= String.fromCharCode(x);
    x++;
}

function hash(str) {
	// convert string to array
	str = str.split("");
	// transform the string into number
	for (var i = str.length - 1; i >= 0; i--) {
		// encode => parity / unparity
		if (i%2 == 0) {
			str[i] = (letter.indexOf(str[i]) ** 2 * Math.LOG10E) / 5;
		} else {
			str[i] = (letter.indexOf(str[i]) ** 4 * Math.LN2) / 10;
		}
		// encode according to the parity of a number
		if (str[i]%2 == 0) {
			str.concat(str[i] - str[i - 1]);
		}
	}

	// encode => last number
	for (var i = str.length - 1; i >= 0; i--) {
		if (i == 0) {
			str[i] = str[i] + str[i];
		} else {
			str[i] = str[i] - str[i - 1];
		}
		
	}

	// sum all the members of the array
	str = eval(String(str).replaceAll(",", "+").replaceAll(" ", "+").replaceAll("-", ""));

	// remove dots
	str = String(str).replace(".", "");

	// put the number in base 36
	str = Number(str).toString(36);
	return str;
}
