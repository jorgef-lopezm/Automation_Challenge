/**
 * Returns the amount of money as Number type from a string as a currency
 * @param {String} money The text to format
 * @returns {Number} The amount of money as number
 */
export default (money) => Number(money.replace(/[^0-9.-]+/g, ''));
