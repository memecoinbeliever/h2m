function h2mFunction() {
	let dataInput, dataLength, style;
	const magnetBtn = document.getElementById('link');

	// Get input text
	dataInput = document.getElementById('hash').value;
	// Get dataInput length
	dataLength = dataInput.length;

	// Whether selected text equal to 40 characters
	if (dataLength === 40) {
		style = 'visible';

		const magnetPrefix = 'magnet:?xt=urn:btih:';
		let magnetURL;

		magnetURL = magnetPrefix + dataInput;

		// magnet link browser trigger
		window.open(magnetURL, '_self');

		// magnet link for button
		magnetBtn.href = magnetURL;
	} else {
		style = 'hidden';
		alert('Invalid hash');
	}

	magnetBtn.style.visibility = style;
}

// Onpaste event
function pasted(element) {
	setTimeout(function () {
		h2mFunction();
	}, 4);
}
