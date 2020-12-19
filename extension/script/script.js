chrome.contextMenus.onClicked.addListener(function (info) {
	chrome.contextMenus.remove('magnet', function () {
		chrome.contextMenus.create({
			id: 'magnet',
			title: 'Hash2Mag',
			contexts: ['selection'],
		});
	});

	let dataInput, dataLength;

	const format = /[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]+/;

	dataInput = info.selectionText;

	dataLength = dataInput.length;

	const checkingLogic =
		info.menuItemId == 'magnet' &&
		dataLength == 40 &&
		format.test(dataInput) == false &&
		/\s/.test(dataInput) == false;

	// dataLength input
	if (checkingLogic) {
		let magnetURL;
		const magnetPrefix = 'magnet:?xt=urn:btih:';

		magnetURL = magnetPrefix + dataInput;

		chrome.tabs.query(
			{
				active: true,
				currentWindow: true,
			},
			function (tabs) {
				let tab = tabs[0];
				chrome.tabs.update(tab.id, {
					url: magnetURL,
				});
			}
		);
	} else {
		alert('Invalid Hash');
	}
});

// Create context menus
chrome.contextMenus.create({
	id: 'magnet',
	title: 'Hash2Mag',
	contexts: ['selection'],
});
