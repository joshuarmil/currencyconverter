window.onload = function() {
	document.getElementById('Convert').onclick = function fun() {
		const moneyValue = document.forms['converter']['value'].value;
		const baseCurrency = document.forms['converter']['base'].value;
		const endCurrency = document.forms['converter']['end'].value;
		console.log(baseCurrency, endCurrency);
		console.log(moneyValue);
		const API = `https://api.exchangeratesapi.io/latest?symbols=${baseCurrency},${endCurrency}`;
		console.log(API);
		const xhr = new XMLHttpRequest();
		xhr.open('GET', API);
		xhr.send();
		xhr.onreadystatechange = processRequest;
		function processRequest(e) {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.responseText);
				const responseValue = JSON.parse(xhr.responseText);
				console.log(responseValue.rates[`${endCurrency}`]);
				let USDToGBPRate = responseValue.rates[`${endCurrency}`];
				let USDToGBPValue = USDToGBPRate * Number(moneyValue);
				document.getElementById(
					'Converted'
				).innerHTML = `The converted amount is: ${USDToGBPValue.toFixed(
					2
				)} ${endCurrency}`;
			}
		}
	};
};
