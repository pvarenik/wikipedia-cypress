class ArticlePage {
    get articleTitle() {
      return cy.get('h1#firstHeading');
    }
  
    get editButton() {
      return cy.get('#ca-edit a');
    }
  
    get textbox() {
      return cy.get('#wpTextbox1');
    }
  
    get saveButton() {
      return cy.get('#wpSave');
    }
  
    get successMessage() {
      return cy.get('.mw-edit-success');
    }
  
    editArticle(newContent) {
      this.editButton.click();
      this.textbox.clear().type(newContent);
      this.saveButton.click();
    }
  }
  
  export default ArticlePage;