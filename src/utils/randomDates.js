import randomDate from './randomDate';

/**
 * Returns an object of two dates within a range and a difference of days provided
 * @param {Date} start The start date for the FIRST date range
 * @param {Date} end The end date for the FIRST date range
 * @param {Number} amountOfDays The amount of days in between both dates
 * @returns {Object} An object with start and end date
 */
export default (start, end, amountOfDays) => {
  const entryDate = randomDate(start, end);
  const leavingDate = new Date(
    entryDate.getTime() + 86400000 * amountOfDays
  );

  return {
    entryDate,
    leavingDate,
  };
};
