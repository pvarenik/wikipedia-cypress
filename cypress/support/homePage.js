class HomePage {
    visit() {
      cy.visit('https://en.wikipedia.org/');
    }
  
    search(query) {
      cy.get('[placeholder="Search Wikipedia"]').type(`${query}`);
      cy.get('button').contains('Search').click();
    }
  
    get searchResults() {
      return cy.get('.mw-search-results');
    }
  
    switchLanguage(language) {
      cy.get('#searchLanguage').click();
      cy.get('#searchLanguage option').contains(language).click();
    }
  
    get languageCode() {
      return cy.get('html').invoke('attr', 'lang');
    }
  }
  
  export default HomePage;