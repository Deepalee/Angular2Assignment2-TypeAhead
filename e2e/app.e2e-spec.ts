import { TypeAheadPage } from './app.po';

describe('type-ahead App', function() {
  let page: TypeAheadPage;

  beforeEach(() => {
    page = new TypeAheadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
