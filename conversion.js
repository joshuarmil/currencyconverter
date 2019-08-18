module.exports = {
	conversion: (req, res) => {
		const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
		const moneyValue = req.body.moneyValue;
		const baseCurrency = req.body.baseCurrency;
		const endCurrency = req.body.endCurrency;
		const API = `https://api.exchangeratesapi.io/latest?symbols=${baseCurrency},${endCurrency}`;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', API);
		xhr.send();
		xhr.onreadystatechange = processRequest;
		function processRequest(e) {
			if (xhr.readyState == 4 && xhr.status == 200) {
				const responseValue = JSON.parse(xhr.responseText);
				let ConversionRate = responseValue.rates[`${endCurrency}`];
				let ConversionValue = ConversionRate * Number(moneyValue);
				return res.send(`${ConversionValue}`);
			}
		}
	}
};
