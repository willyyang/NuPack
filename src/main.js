function getMarkupEstimation(inputBasePrice, inputPeople, inputCategory) {
	// Convert basePrice to number
	var basePrice = convertBasePrice(inputBasePrice);

	// Extract number of people
	var people = extractNumOfPeople(inputPeople);
	
	// Get material markup percent
	var materialMarkup = getMaterialMarkup(inputCategory);

	var markupEstimation;
	var flatMarkup;
	if (basePrice === 0) {
		markupEstimation = 0;
	} else {
		flatMarkup = basePrice + (basePrice * 0.05);
		markupEstimation = flatMarkup + (flatMarkup * materialMarkup) + (flatMarkup * people * 0.012);
	}
	markupEstimation = roundAndFormatEstimation(markupEstimation);
	return markupEstimation;
}

function roundAndFormatEstimation(price) {
	return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

function getMaterialMarkup(category) {
	var materials = {
		food: 0.13,
		electronics: 0.02,
		drugs: 0.075
	};
	return materials[category] || 0;
}

function extractNumOfPeople(people) {
	var numOfPeople;
	if (typeof people === 'string') {
		numOfPeople = parseNumFromPeople(people);
	} else if (typeof people === 'number') {
		numOfPeople = peopleValueToInt(people);
	} else {
		throw new Error(
			'Input for number of people has to be a string or number'
		);
	}
	return numOfPeople;
}

function parseNumFromPeople(stringPeople) {
	var units = ['people', 'person'];
	var strToArr = stringPeople.split(' ');
	
	if ((strToArr.length === 2 && units.indexOf(strToArr[1]) > -1 )
			|| strToArr.length === 1) {
		return peopleValueToInt(strToArr[0]);
	} else {
		throw new Error(
			'Error in input for number of people. ' +
			'Accepted Forms: a positive number or a positive number followed by ' +
			'the word people or person'
		);
	}
}

function peopleValueToInt(inputVal) {
	if (((inputVal | 0) > 0 && inputVal % 1 == 0) || 0) {
		return parseInt(inputVal);
	} else {
		throw new Error(
			'Number of people has to be a positive integer'
		);
	}
}

function convertBasePrice(basePrice) {
	var price;
	if (typeof basePrice === 'string') {
		price = parseNumFromBasePrice(basePrice);
	} else if (typeof basePrice === 'number' && basePrice >= 0) {
		price = basePrice;
	} else {
		throw new Error(
			'Base Price must be a string or positive number. ie. $1,299.93 or 1299.93'
		);
	}
	return price;
}

function parseNumFromBasePrice(stringBasePrice) {
	var basePrice = Number(stringBasePrice.replace(/[^0-9-\.]+/g,''));
	// Ensure base price is a positive number
	if (basePrice < 0 ) {
		throw new Error('Base Price must be a positive number.');
	}
	return basePrice;
}

exports.getMarkupEstimation = getMarkupEstimation;
exports.convertBasePrice =  convertBasePrice;
exports.extractNumOfPeople = extractNumOfPeople;
exports.getMaterialMarkup = getMaterialMarkup;
