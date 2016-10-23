function getMarkupEstimation(inputBasePrice, inputPeople, inputCategory) {
	// Convert basePrice to number
	var basePrice = convertBasePrice(inputBasePrice);

	// Extract number of people
	var people = extractNumOfPeople(inputPeople);
	
	return basePrice;
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
	
	if ((strToArr.length === 2 && units.indexOf(strToArr[1]) === 0 )
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
	// Apply this logic later when all values converted
	// Ensure number has proper cents value 
	// if (stringBasePrice[stringBasePrice.length-3] !== '.') {
	// 	throw new Error('Base Price must have proper cents value.');
	// }
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
