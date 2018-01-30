const isObject = require('is-plain-obj');

module.exports.has = async function (array, query) {
	if (isObject(array)) {
		throw new Error('Array is of type Object!');
	}
	const queryResult = [];
	for (let i = 0; i < array.length; i++) {
		let hasIt = true;
		for (const q in query) {
			if (typeof array[i][q] === 'undefined' || array[i][q] !== query[q]) {
				hasIt = false;
				break;
			}
		}
		(hasIt) ?	queryResult.push(array[i]) : null; // eslint-disable-line no-unused-expressions
	}
	return queryResult;
};
