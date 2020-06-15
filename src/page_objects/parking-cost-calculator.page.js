import Page from "./page";

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
    this.url = "http://www.shino.de/parkcalc/";
    this.pageTitle = "Parking Cost Calculator";
  }

  /** Parking lot dropdown input selector */
  get parkingLotDropdown() {
    return "#ParkingLot";
  }

  /** Entry date calendar button */
  get entryDateCalendarButton() {
    return "tr:nth-child(2) img";
  }

  get leavingDateCalendarButton() {
    return "tr:nth-child(3) a img";
  }

  chooseParkingLot(index) {
    $(this.parkingLotDropdown).selectByIndex(index);
  }

  openEntryCalendar() {
    $(this.entryDateCalendarButton).click();
  }

  openLeavingCalendar() {
    $(this.leavingDateCalendarButton).click();
  }
}
