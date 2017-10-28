chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	var qrcode = new QRCode("qr", {
		text: tabs[0].url,
		width: 128,
		height: 128,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.L
	});
});