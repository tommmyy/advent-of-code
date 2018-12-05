const { getChecksum, countGroups, countIfContains, countIfContainsMulti, multiplyList } = require('./day2');
describe('countGroups', () => {
	it('counts the letters in word', () => {
		expect(countGroups('abcdef')).toEqual([1, 1, 1, 1, 1, 1]);
		expect(countGroups('bababc')).toEqual([3, 2, 1]);
	});
});

describe('countIfContains', () => {
	it('counts the group if contains provided number', () => {
		expect(countIfContains(3, [[3, 3, 3], [1, 2]])).toBe(1);
		expect(countIfContains(2, [[2, 3, 3], [1, 2]])).toBe(2);
	});
});
describe('countIfContainsMulti', () => {
	it('counts the group if contains one of provided numbers', () => {
		expect(countIfContainsMulti([3, 2], [[3, 3, 3], [1, 2, 3]])).toEqual([2, 1]);
	});
});
describe('multiplyList', () => {
	it('multiplyList', () => {
		expect(multiplyList([3, 2])).toEqual(6);
		expect(multiplyList([3, 2, 3])).toEqual(18);
	});
});
describe('getChecksum', () => {
	it('counts checksum from array of numbers', () => {
		expect(getChecksum(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'])).toBe(12);
	});
});
