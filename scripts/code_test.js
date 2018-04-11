function isEven(m) {
	if (m % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

function correctClass(row) {
	if (isEven(row) === true) {
		return "even";
	}
	else {
		return "odd";
	}
}
function triangle(n, character) {
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

// function triangle(n, character) {
// 	var line = "";
// 	var k = 1;
// 	var i = "";
// 	if (character === ""){
// 		i = 1;
// 	}
// 	else {
// 		i = character;
// 	}
// 	while (k <= 5) {
// 		var j = 0;
// 		var lineContent = "";
// 			while ( j < k) {
// 				if (correctClass(k) === "even") {
// 					lineContent += "<span class='even'>" + i  + "<span>";
// 				}
// 				else {
// 					lineContent += "<span class='odd'>" + i + "<span>";
// 				}
// 				j++;
// 			}
// 		line += "<p>" + lineContent + "</p>";
// 		k++;
// 		i++;
// 	}
// 	document.body.innerHTML = line;
// }




// function triangle(n) {
// 	var line = "";
// 	var i = 1;
// 	while (i <= 5) {
// 	var j = 0;
// 	var lineContent = "";
// 		while ( j < i) {
// 		lineContent += i;
// 		j++;
// 		}
// 	line += "<p>" + lineContent + "</p>";
// 	i++;
// 	}
// 	document.body.innerHTML = line;
// }

// 

// for (var i = 1; i <= 5; i++) {
// 	for (var j = 0; j < i; j++) {
// 		console.log(i);
// 	}
// }




