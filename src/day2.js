const R = require('ramda');

const R_ = require('ramda-extension');
const stringToList = R.split('');

const filterLenght = R.compose(
	R.length,
	R.filter
);

const countGroups = R.compose(
	R.values,
	R.countBy(R.toLower),
	stringToList
);

const countIfContains = R.useWith(filterLenght, [R.includes, R.identity]);

const countIfContainsMulti = R.curry((ns, gs) => {
	return R.map((n) => countIfContains(n, gs))(ns);
});

const multiplyList = R.reduce(R.multiply, 1);

const getChecksum = R.compose(
	multiplyList,
	countIfContainsMulti([2, 3]),
	R.map(countGroups)
);
const weightStrings = R.identity;
const findCloseStrings = R.identity;

module.exports = {
	countGroups,
	countIfContains,
	countIfContainsMulti,
	getChecksum,
	multiplyList,
	weightStrings,
	findCloseStrings,
	run: findCloseStrings
};
