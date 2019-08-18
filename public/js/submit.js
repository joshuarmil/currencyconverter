window.onload = function() {
	document.getElementById('Convert').onclick = function fun() {
		let payload = {
			moneyValue: document.forms['converter']['value'].value,
			baseCurrency: document.forms['converter']['base'].value,
			endCurrency: document.forms['converter']['end'].value
		};
		const URL = '/convert';
		const xhr = new XMLHttpRequest();
		xhr.open('POST', URL, true);
		xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhr.send(JSON.stringify(payload));
		xhr.onreadystatechange = processRequest;
		function processRequest(e) {
			if (xhr.readyState == 4 && xhr.status == 200) {
				const responseValue = JSON.parse(xhr.responseText);
				document.getElementById(
					'Converted'
				).innerHTML = `The converted amount is: ${responseValue.toFixed(
					2
				)} ${payload.endCurrency}`;
			}
		}
	};
};
