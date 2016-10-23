var nupack = require('../../src/main.js');

describe('Get Inputs Test', function() {
	it('returns nupack', function() {
		expect(nupack.getInputs()).toBe('nupack');
	});
});
