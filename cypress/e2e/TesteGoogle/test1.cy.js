describe('Site-ul Google.com',() => {

    // Testul numarul 1
    it('functioneaza cu o cautare basic', ()=> {
        cy.visit("https://www.google.com");
        cy.get("#L2AGLb").click();
        cy.get(".gLFyf").type('Savin Ionut').type("{enter}");
        
    })
  


})