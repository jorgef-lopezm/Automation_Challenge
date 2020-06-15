/**
 * Returns a random date within a provided range
 * @param {Date} start The start date for random date range
 * @param {Date} end The end date for random date range
 * @returns {Date} Random date generated
 */
export default (start, end) => new Date(
  start.getTime()
      + Math.random()
        * (end.getTime() - start.getTime())
);
