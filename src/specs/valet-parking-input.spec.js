import ParkingCostCalculator from '../page_objects/parking-cost-calculator.page';
import PickADate from '../page_objects/pick-a-date.page';
import randomNumber from '../utils/randomNumber';
import randomDates from '../utils/randomDates';

describe("Check if the calculation is correct when I select 'Valet Parking' option.", () => {
  const parkingCostCalculator = new ParkingCostCalculator();
  const pickADate = new PickADate();

  it(`I open ${parkingCostCalculator.pageTitle} webpage`, () => {
    parkingCostCalculator.open();
  });
  it('I select the "Valet Parking" option from the dropdown', () => {
    parkingCostCalculator.chooseParkingLot(0);
  });
  it('I pick a random entry date', () => {
    parkingCostCalculator.openEntryCalendar();

    // Make a function to change scope
    browser.switchWindow('Pick a Date');

    const length = randomNumber(2, 5);
    const objDate = randomDates(new Date(2020, 0, 1), new Date(2020, 0, 30), length);

    pickADate.selectADate(objDate.entryDate);

    browser.switchWindow(parkingCostCalculator.pageTitle);
    parkingCostCalculator.openLeavingCalendar();
    browser.switchWindow('Pick a Date');
    pickADate.selectADate(objDate.entryDate);
  });
});
