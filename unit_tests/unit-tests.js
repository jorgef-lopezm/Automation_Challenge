/* eslint-disable chai-friendly/no-unused-expressions */
import chai from 'chai';
import randomNumber from '../src/utils/randomNumber';
import randomDate from '../src/utils/randomDate';
import randomDates from '../src/utils/randomDates';

describe('Check if all my utilities functions are working as expected', () => {
  it('Check randomNumber()', () => {
    let value2 = false;
    try {
      randomNumber(10, 3);
    } catch (e) {
      value2 = true;
    }
    chai.expect(value2).to.be.true;

    let value4 = false;
    try {
      randomNumber(1, 1);
    } catch (e) {
      value4 = true;
    }
    chai.expect(value4).to.be.true;

    const value5 = randomNumber(1, 30);
    chai.expect(value5).to.be.within(1, 30);
    chai.expect(value5).to.be.a('number');

    const value6 = randomNumber(50, 55);
    chai.expect(value6).to.be.within(50, 55);
    chai.expect(value6).to.be.a('number');

    const value7 = randomNumber(10023, 10067);
    chai.expect(value7).to.be.within(10023, 10067);
    chai.expect(value7).to.be.a('number');

    const value8 = randomNumber(-555, 4);
    chai.expect(value8).to.be.within(-555, 4);
    chai.expect(value8).to.be.a('number');

    const value9 = randomNumber(1545, 3343);
    chai.expect(value9).to.be.within(1545, 3343);
    chai.expect(value9).to.be.a('number');
  });
  it('Check randomDate()', () => {
    const value1 = randomDate(new Date(2020, 0, 1), new Date(2020, 11, 31));
    chai.expect(value1).to.be.within(new Date(2020, 0, 1), new Date(2020, 11, 31));
    chai.expect(value1).to.be.a('date');

    const value2 = randomDate(new Date(2000, 10, 11), new Date(2004, 2, 3));
    chai.expect(value2).to.be.within(new Date(2000, 10, 11), new Date(2004, 2, 3));
    chai.expect(value2).to.be.a('date');

    const value3 = randomDate(new Date(2015, 11, 1), new Date(2019, 1, 20));
    chai.expect(value3).to.be.within(new Date(2015, 11, 1), new Date(2019, 1, 20));
    chai.expect(value3).to.be.a('date');

    const value4 = randomDate(new Date(2011, 2, 10), new Date(2015, 4, 20));
    chai.expect(value4).to.be.within(new Date(2011, 2, 10), new Date(2015, 4, 20));
    chai.expect(value4).to.be.a('date');
  });
  it('Check randomDates()', () => {
    const value1 = randomDates(new Date(2020, 0, 1), new Date(2020, 11, 31), 4);
    const diffDays1 = Math.ceil(
      Math.abs(value1.entryDate - value1.leavingDate) / (1000 * 60 * 60 * 24)
    );
    chai.expect(value1.entryDate).to.be.within(new Date(2020, 0, 1), new Date(2020, 11, 31), 29);
    chai.expect(value1.entryDate).to.be.a('date');
    chai.expect(diffDays1).to.equal(4);

    const value2 = randomDates(new Date(2000, 10, 11), new Date(2004, 2, 3), 32);
    const diffDays2 = Math.ceil(
      Math.abs(value2.entryDate - value2.leavingDate) / (1000 * 60 * 60 * 24)
    );
    chai.expect(value2.entryDate).to.be.within(new Date(2000, 10, 11), new Date(2004, 2, 3), 11);
    chai.expect(value2.entryDate).to.be.a('date');
    chai.expect(diffDays2).to.equal(32);

    const value3 = randomDates(new Date(2015, 11, 1), new Date(2019, 1, 20), 12);
    const diffDays3 = Math.ceil(
      Math.abs(value3.entryDate - value3.leavingDate) / (1000 * 60 * 60 * 24)
    );
    chai.expect(value3.entryDate).to.be.within(new Date(2015, 11, 1), new Date(2019, 1, 20));
    chai.expect(value3.entryDate).to.be.a('date');
    chai.expect(diffDays3).to.equal(12);

    const value4 = randomDates(new Date(2011, 2, 10), new Date(2015, 4, 20), 230);
    const diffDays4 = Math.ceil(
      Math.abs(value4.entryDate - value4.leavingDate) / (1000 * 60 * 60 * 24)
    );
    chai.expect(value4.entryDate).to.be.within(new Date(2011, 2, 10), new Date(2015, 4, 20));
    chai.expect(value4.entryDate).to.be.a('date');
    chai.expect(diffDays4).to.equal(230);
  });
});
