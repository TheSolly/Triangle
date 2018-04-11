function isEven(m) {
	if (m % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

function correctClass(row) {
	// function to determine if a row is
	// even or odd which depends on the
	// isEven function.
	if (isEven(row) === true) {
		return "even";
	}
	else {
		return "odd";
	}
}
function triangle(n, character) {
	// A function that draw a triangle with rows depends 
	// on the first parameter and use the second
	// parameter as the character to draw with it.
	// if second parameter is empty it draws with numbers.
	var line = "";
	var k = 1;
	var i = "";
	if (character === ""){
		i = 1;
		while (k <= n) {
			var j = 0;
			var lineContent = "";
			while ( j < k) {
				if (correctClass(k) === "even") {
					lineContent += "<span class='even'>" + i  + "<span>";
				}
				else {
					lineContent += "<span class='odd'>" + i + "<span>";
				}
				j++;
			}
			line += "<p>" + lineContent + "</p>";
			k++;
			i++;
		}
	}
	else {
		i = character;
		while (k <= n) {
			var l = 0;
			var lineContent1 = "";
			while ( l < k) {
				if (correctClass(k) === "even") {
					lineContent1 += "<span class='even'>" + i  + "<span>";
				}
				else {
					lineContent1 += "<span class='odd'>" + i + "<span>";
				}
				l++;
			}
			line += "<p>" + lineContent1 + "</p>";
			k++;
		}

	}
	
	document.body.innerHTML = line;
}


triangle(8, "&");





