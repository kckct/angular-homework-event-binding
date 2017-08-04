import { HomeworkPage } from './app.po';

describe('angular-homework-event-binding App', () => {
  let page: HomeworkPage;

  beforeEach(() => {
    page = new HomeworkPage();
  });

  it(`should be 0 after select 'AWS'`, () => {
    page.navigateTo().setOption('AWS');
    expect(page.getSpanText()).toBe('0');
  });

  it(`should be 1 after select 'Azure'`, () => {
    page.navigateTo().setOption('Azure');
    expect(page.getSpanText()).toBe('1');
  });

  it(`should be 2 after select 'Aliyun'`, () => {
    page.navigateTo().setOption('Aliyun');
    expect(page.getSpanText()).toBe('2');
  });
});
