const { firstRepeatableFrequency } = require('./day1Frequency');

describe('firstRepeatableFrequency', () => {
	it('should return 0', () => {
		expect(firstRepeatableFrequency([+1, -1])).toBe(0);
	});
	it('should return 10', () => {
		expect(firstRepeatableFrequency([+3, +3, +4, -2, -4])).toBe(10);
	});
	it('should return 5', () => {
		expect(firstRepeatableFrequency([-6, +3, +8, +5, -6])).toBe(5);
	});
	it('should return 15', () => {
		expect(firstRepeatableFrequency([+7, +7, -2, -7, -4])).toBe(14);
	});
});
