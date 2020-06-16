import randomNumber from './randomNumber';

/**
 * Returns an object of two dates within a range and a difference of days provided
 * @param {Number} amountOfHours The start date for the FIRST date range
 * @param {Number} amountOfMinutes The end date for the FIRST date range
 * @returns {Object} An object with entry and leaving hour
 */
export default (amountOfHours, amountOfMinutes) => {
  const hours = randomNumber(0, 24 - amountOfHours);
  const minutes = randomNumber(0, 60 - amountOfMinutes);

  return {
    entryHour: `${hours}:${minutes}`,
    leavingHour: `${hours + amountOfHours}:${minutes + amountOfMinutes}`,
  };
};
