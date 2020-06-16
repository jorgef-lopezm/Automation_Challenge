/* eslint-disable comma-dangle */
import ParkingCostCalculator from '../page_objects/parking-cost-calculator.page';
import PickADate from '../page_objects/pick-a-date.page';
import randomNumber from '../utils/randomNumber';
import randomDates from '../utils/randomDates';
import formatMoney from '../utils/formatMoney';
import {
  SHORT_TERM_PARKING_DAILY_RATE,
  SHORT_TERM_PARKING_HOUR_RATE,
} from '../../config/test.constants';
import randomHours from '../utils/randomHours';

describe("Check if the output is correct when I select 'Short Term Parking' option.", () => {
  const parkingCostCalculator = new ParkingCostCalculator();
  const pickADate = new PickADate();
  const days = randomNumber(1, 10);
  const dates = randomDates(new Date(2020, 0, 1), new Date(2020, 0, 30), days);
  const hours = randomNumber(1, 22);
  const minutes = randomNumber(1, 58);

  beforeEach(() => {
    parkingCostCalculator.open();
  });

  it(`I submit form with ${days} days and check the output`, () => {
    expect(parkingCostCalculator.waitForDisplay(true, parkingCostCalculator.formSelector)).to.be
      .true;
    // Choose index 1
    parkingCostCalculator.chooseParkingLot(1);

    // I open calendar and switch to new window
    parkingCostCalculator.openEntryCalendar();
    pickADate.switchFocus();

    // I select the entry date and swtich back to original window
    pickADate.selectADate(dates.entryDate);
    parkingCostCalculator.switchFocus();

    // I open calendar and switch to new window
    parkingCostCalculator.openLeavingCalendar();
    pickADate.switchFocus();

    // I select the leaving date and swtich back to original window
    pickADate.selectADate(dates.leavingDate);
    parkingCostCalculator.switchFocus();

    // I calculate parking rate
    parkingCostCalculator.calculateParkingCost();

    expect(formatMoney(parkingCostCalculator.getText(parkingCostCalculator.costText))).to.equal(
      SHORT_TERM_PARKING_DAILY_RATE * days
    );
  });
  it(`I submit form with ${hours} hours and ${minutes} minutes and check the output`, () => {
    expect(parkingCostCalculator.waitForDisplay(true, parkingCostCalculator.formSelector)).to.be
      .true;

    // Choose index 1
    parkingCostCalculator.chooseParkingLot(1);

    // I open calendar and switch to new window
    parkingCostCalculator.openEntryCalendar();
    pickADate.switchFocus();

    // I select the entry date and swtich back to original window
    pickADate.selectADate(new Date());
    parkingCostCalculator.switchFocus();

    // I open calendar and switch to new window
    parkingCostCalculator.openLeavingCalendar();
    pickADate.switchFocus();

    // I select the leaving date and swtich back to original window
    pickADate.selectADate(new Date());
    parkingCostCalculator.switchFocus();

    // I select the entry and leaving time
    const time = randomHours(hours, minutes);
    parkingCostCalculator.fillText(parkingCostCalculator.entryHourInput, time.entryHour);
    parkingCostCalculator.fillText(parkingCostCalculator.leavingHourInput, time.leavingHour);

    // I calculate parking rate
    parkingCostCalculator.calculateParkingCost();

    let expectedPrice = 0;

    if (hours >= 12)
      expectedPrice = 24;
    else {
      if (minutes > 0 && minutes <= 30)
        expectedPrice += 1;
      else if (minutes > 30 && minutes < 60)
        expectedPrice += 2;

      expectedPrice += SHORT_TERM_PARKING_HOUR_RATE * hours;
    }

    expect(formatMoney(parkingCostCalculator.getText(parkingCostCalculator.costText))).to.equal(
      expectedPrice
    );
  });
});
