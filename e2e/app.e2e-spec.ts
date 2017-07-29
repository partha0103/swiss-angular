import { SwissAngularPage } from './app.po';

describe('swiss-angular App', () => {
  let page: SwissAngularPage;

  beforeEach(() => {
    page = new SwissAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
