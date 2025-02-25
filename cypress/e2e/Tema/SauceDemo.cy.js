describe('Site Saucedemo',() => {

    // Testul numarul 1
//     it('Login with Wrong credentials!', ()=> {
//         cy.visit("https://www.saucedemo.com/");
//         cy.get('[data-test="username"]').type('WrongUser');
//         cy.get('[data-test="password"]').type('WrongPass');
//         cy.get('[data-test="login-button"]').click();
//         cy.get('[data-test="error"]').should('exist')
//     })

//   // Testul numarul 2
//   it('Login with Correct credentials!', ()=> {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.url().should('include', 'inventory')   
// })

//  // Testul numarul 3
//  it('Logout!', ()=> {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.get('.bm-burger-button').click();
//     cy.get('[data-test="logout-sidebar-link"]').should('exist');
//     cy.get('[data-test="logout-sidebar-link"]').click()
// })
 // Testul numarul 4
//  it('Open & close Menu! ', ()=> {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.get('.bm-burger-button').click();
//     cy.get('#react-burger-cross-btn').click()
// })
// // Testul numarul 5
// it('Add product in cart!', ()=> {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     cy.get('[data-test="shopping-cart-link"]').click();
//     cy.get('[data-test="inventory-item"]').should('contain', 'Backpack')
// })
// Testul numarul 6
// it('Delete product in cart!', ()=> {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     cy.get('[data-test="shopping-cart-link"]').click();
//     cy.get('[data-test="inventory-item"]').should('contain', 'Backpack');
//     cy.get('[data-test="remove-sauce-labs-backpack"]').click();
//     cy.get('[data-test="cart-list"]').should('not.contain', 'Backpack');
// })


// Testul numarul 7
// it('Order a product!', ()=> {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     cy.get('[data-test="shopping-cart-link"]').click();
//     cy.get('[data-test="checkout"]').click();
//     cy.get('[data-test="firstName"]').type('Ionut');
//     cy.get('[data-test="lastName"]').type('Savin');
//     cy.get('[data-test="postalCode"]').type('707410');
//     cy.get('[data-test="continue"]').click();
//     cy.get('[data-test="inventory-item"]').should('exist');
//     cy.get('[data-test="finish"]').click();
//     cy.get('[data-test="checkout-complete-container"]').should('be.visible').and('contain', 'Thank you for your order!')
// })

//   // Testul numarul 8
//   it('Open product page details!', ()=> {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.url().should('include', 'inventory');
//     cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();
//     cy.get('.inventory_details_desc_container').should('be.visible')  
// })

 // Testul numarul 9
 it('Back to products button!', ()=> {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html')
})

})