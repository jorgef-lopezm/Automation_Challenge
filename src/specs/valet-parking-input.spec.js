import ParkingCostCalculator from '../page_objects/parking-cost-calculator.page';
import PickADate from '../page_objects/pick-a-date.page';
import randomNumber from '../utils/randomNumber';
import randomDates from '../utils/randomDates';

describe("Check if the output is correct when I select 'Valet Parking' option.", () => {
  const parkingCostCalculator = new ParkingCostCalculator();
  const pickADate = new PickADate();
  const length = randomNumber(2, 5);
  const objDate = randomDates(new Date(2020, 0, 1), new Date(2020, 0, 30), length);

  it('I pick a random entry date', () => {
    // I open website and select 'Valet Parking' option
    parkingCostCalculator.open();
    parkingCostCalculator.chooseParkingLot(0);
    // I open calendar
    parkingCostCalculator.openEntryCalendar();
    pickADate.switchFocus();
    // I select a the entry date
    pickADate.selectADate(objDate.entryDate);
    parkingCostCalculator.switchFocus();

    // I open calendar
    parkingCostCalculator.openLeavingCalendar();
    pickADate.switchFocus();
    // I select leaving date
    pickADate.selectADate(objDate.entryDate);
    parkingCostCalculator.switchFocus();
    // I calculate parking rate
    parkingCostCalculator.calculateButton();
  });
});
