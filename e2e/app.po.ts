import { browser, by, element } from 'protractor';

export class HomeworkPage {
  navigateTo() {
    browser.get('/');
    return this;
  }

  setOption(input: string) {
    return element(by.cssContainingText('option', input)).click();
  }

  getSpanText() {
    return element(by.css('span')).getText();
  }
}
