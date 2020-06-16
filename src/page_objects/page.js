import { DEFAULT_TIMEOUT } from '../../config/constants';

/**
 * Base page object class, all page object should
 * inherit this page class
 */
export default class Page {
  /**
   * Constructor for base page object
   */
  constructor() {
    this.url = '';
    this.pageTitle = '';
  }

  /**
   * Method for opening the desired page on browser
   */
  open() {
    browser.url(this.url);
  }

  /**
   * Method for changing to this desired page's window or tab
   */
  switchFocus() {
    browser.switchWindow(this.pageTitle);
  }

  /**
   * Wait for the element to be displayed
   * @param {boolean} isDisplay Is selector shown or not
   * @param {String} selector The selector to wait for display
   * @return {boolean} returns if element is displayed or not
   */
  waitForDisplay(isDisplay, selector) {
    return $(selector).waitForDisplayed({
      timeout: DEFAULT_TIMEOUT,
      reverse: !isDisplay,
    });
  }

  /**
   * Return the desired text from an element
   * @param {String} selector Selector of the element to get text from
   * @return {String} The text of the element
   */
  getText(selector) {
    return $(selector).getText();
  }

  /**
   * Fills the text of an input
   * @param {String} selector Selector of the element to get text from
   * @param {String} text Text to fill element with
   */
  fillText(selector, text) {
    $(selector).setValue(text);
  }
}
