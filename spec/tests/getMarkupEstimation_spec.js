var nupack = require('../../src/main.js');

// Base Price Conversion
describe('Converts Base Price', function() {
	it('should convert the correct value from a string ', function() {
		expect(nupack.convertBasePrice('$1,299.99')).toBe(1299.99);
	});

	it('should return the correct value from a positive number', function() {
		expect(nupack.convertBasePrice(1299.99)).toBe(1299.99);
	});

	it('should throw an error for a negative string value', function() {
		expect(function() {
			nupack.convertBasePrice('-$1,299.99');
		}).toThrow();
	});

	it('should throw an error for a negative number value', function() {
		expect(function() {
			nupack.convertBasePrice(-1299.99);
		}).toThrow();
	});
});

// Extract number of people
describe('Extract number of people', function() {
	it('should return the correct value for a string input', function() {
		expect(nupack.extractNumOfPeople('100 people')).toBe(100);
	});

	it('should return the correct value for a number input', function() {
		expect(nupack.extractNumOfPeople(100)).toBe(100);
	});

	it('should throw an error with a negative input', function() {
		expect(function() {
			nupack.extractNumOfPeople(-100);
		}).toThrow();
	});

	it('should throw an error with an incorrect format type', function() {
		expect(function() {
			nupack.extractNumOfPeople('-100 peo 32');
		}).toThrow();
	});

	it('should throw an error with another incorrect format type', function() {
		expect(function() {
			nupack.extractNumOfPeople('people');
		}).toThrow();
	});
});