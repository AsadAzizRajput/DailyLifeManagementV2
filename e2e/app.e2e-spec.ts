import { PersonalExprenseManagerPage } from './app.po';

describe('personal-exprense-manager App', function() {
  let page: PersonalExprenseManagerPage;

  beforeEach(() => {
    page = new PersonalExprenseManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
