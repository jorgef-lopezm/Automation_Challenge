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
}
