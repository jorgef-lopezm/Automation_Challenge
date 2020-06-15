import Page from './page';

/**
 * Page object for Parking Cost Calculator
 * URL: http://www.shino.de/parkcalc/
 */
export default class ParkingCostCalculator extends Page {
  /**
   * Constructor for page object
   */
  constructor() {
    super();
    this.url = 'http://www.shino.de/parkcalc/';
    this.pageTitle = 'Parking Cost Calculator';
    this.formSelector = 'form';
  }

  /** Parking lot dropdown input selector */
  get parkingLotDropdown() {
    return '#ParkingLot';
  }

  /** Entry date calendar button */
  get entryDateCalendarButton() {
    return 'tr:nth-child(2) img';
  }

  /** Leaving date calendar button */
  get leavingDateCalendarButton() {
    return 'tr:nth-child(3) a img';
  }

  /** Calculate button */
  get calculateButton() {
    return 'input[type=submit]';
  }

  /** The content selector for the amount to pay */
  get costText() {
    return 'td:nth-child(2) > span.SubHead > b';
  }

  /**
   * Choose the desired parking lot from the dropdown
   * @param {Number} index The desired option
   */
  chooseParkingLot(index) {
    $(this.parkingLotDropdown).selectByIndex(index);
  }

  /**
   * Open the entry calendar
   */
  openEntryCalendar() {
    $(this.entryDateCalendarButton).click();
  }

  /**
   * Open the leaving calendar
   */
  openLeavingCalendar() {
    $(this.leavingDateCalendarButton).click();
  }

  /** Calculate parking cost */
  calculateParkingCost() {
    $(this.calculateButton).click();
  }
}
