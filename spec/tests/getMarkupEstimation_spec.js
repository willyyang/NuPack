var nupack = require('../../src/main.js');

// Test Base Price Conversion
describe('Converts Base Price', function() {
	it('should convert the correct value from a string ', function() {
		expect(nupack.convertBasePrice('$1,299.99')).toBe(1299.99);
	});

	it('should return the correct value from a positive number', function() {
		expect(nupack.convertBasePrice(1299.99)).toBe(1299.99);
	});

	it('should throw an error for a negative string value', function() {
		expect(function() {
			nupack.convertBasePrice('-$1,299.99')
		}).toThrow();
	});

	it('should throw an error for a negative number value', function() {
		expect(function() {
			nupack.convertBasePrice(-1299.99)
		}).toThrow();
	});
});
