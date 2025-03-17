describe("On Linkedin", () => {

    it("I can login", () => {
        Cypress.on('uncaught:exception', () => false);
        cy.visit("https://www.linkedin.com");
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type("savinionut29@yahoo.com");
        cy.get('#password').type("Savinucc2903");
        cy.get('.btn__primary--large').click();
        cy.get('#ember17').should("exist");
      
    });


});


//cy.get('#username').type("savinionut29@yahoo.com");
  //      cy.get('#password').type("Savinucc2903");