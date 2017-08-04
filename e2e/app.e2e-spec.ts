import { AngularHomeworkEventBindingPage } from './app.po';

describe('angular-homework-event-binding App', () => {
  let page: AngularHomeworkEventBindingPage;

  beforeEach(() => {
    page = new AngularHomeworkEventBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
