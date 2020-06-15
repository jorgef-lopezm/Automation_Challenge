import Page from './page';

/**
 * Page object for Parking Cost Calculator
 * URL: No
 */
export default class PickADate extends Page {
  /**
   * Constructor for page object
   */
  constructor() {
    super();
    this.url = '';
    this.pageTitle = 'Pick A Date';
    this.calendarSelector = 'form > table';
  }

  /** Month dropdown input selector */
  get monthDropdown() {
    return 'tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > select';
  }

  /** Left arrow button selector */
  get leftArrowButton() {
    return 'a:nth-child(1) > b';
  }

  /** Right arrow button selector */
  get rightArrowButton() {
    return 'a:nth-child(3) > b';
  }

  /** Year displayed text selector */
  get yearText() {
    return 'td:nth-child(2) > font > b';
  }

  /** Calendar dates button, ignore the first 2 indexes on query */
  get calendarDatesButton() {
    return 'table > tbody > tr a';
  }

  /**
   * Select the desired year from calendar
   * @param {Number} yearToSelect Year to select on calendar
   */
  selectYear(yearToSelect) {
    let displayedYear = parseInt($(this.yearText).getText(), 10);

    while (displayedYear !== yearToSelect) {
      if (displayedYear > yearToSelect)
        $(this.leftArrowButton).click();
      else if (displayedYear < yearToSelect)
        $(this.rightArrowButton).click();

      displayedYear = parseInt($(this.yearText).getText(), 10);
    }
  }

  /**
   * Select the desired date on calendar
   * @param {Number} dateToSelect Date to select on calendar
   */
  selectDate(dateToSelect) {
    let index = dateToSelect;
    let dateInView = parseInt($$(this.calendarDatesButton)[index].getText(), 10);

    while (dateInView !== dateToSelect)
      dateInView = parseInt($$(this.calendarDatesButton)[++index].getText(), 10);

    $$(this.calendarDatesButton)[index].click();
  }

  /**
   * Selects a date from the calendar
   * @param {Date} date The date to pick
   */
  selectADate(date) {
    // Selecting year
    this.selectYear(date.getFullYear());

    // Selecting month
    $(this.monthDropdown).selectByIndex(date.getMonth());

    // Selecting date
    this.selectDate(date.getDate());
  }
}
