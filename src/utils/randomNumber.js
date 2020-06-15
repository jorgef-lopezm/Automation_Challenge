/**
 * Gets a random number between the range provided
 * @param  {Number}  min  Minimum value on range
 * @param  {Number}  max  Maximum value on range
 * @returns {Number} random number
 */
export default (min, max) => {
  if (min >= max)
    throw Error(`Min value (${max}) cannot be greater or equal than max value (${min})`);
  else
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
