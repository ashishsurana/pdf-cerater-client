import { QaggaPage } from './app.po';

describe('qagga App', () => {
  let page: QaggaPage;

  beforeEach(() => {
    page = new QaggaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
