function getMarkupEstimation(inputBasePrice, inputPeople, inputCategory) {
	// Convert basePrice to number
	var basePrice = convertBasePrice(inputBasePrice);
	
	return basePrice;
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
	var basePrice = Number(stringBasePrice.replace(/[^0-9-\.]+/g,""));
	// Ensure base price is a positive number
	if (basePrice < 0 ) {
		throw new Error('Base Price must be a positive number.');
	}
	return basePrice;
}


exports.getMarkupEstimation = getMarkupEstimation;
exports.convertBasePrice =  convertBasePrice;
