import HomePage from '../support/homePage';
import ArticlePage from '../support/articlePage';

describe('Wikipedia Test Suite', () => {
  const homePage = new HomePage();
  const articlePage = new ArticlePage();

  beforeEach(() => {
    // Reset the session before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Verify Wikipedia Search Functionality', () => {
    homePage.visit();
    homePage.search('Cypress blah blah blah');
    homePage.searchResults.should('contain', 'Cypress');
  });

  it('Verify Wikipedia Article Viewing', () => {
    homePage.visit();
    cy.get('#mp-right li a').first().click();
    articlePage.articleTitle.should('be.visible');
  });
});