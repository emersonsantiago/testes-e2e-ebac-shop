// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('comprar', (itemLista, tamanho, cor) => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    cy.get('.product-block').eq(itemLista).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click({force: true})
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.single_add_to_cart_button').click()
});

Cypress.Commands.add('checkout', (nome, sobrenome, pais, endereco, complemento, cidade, estado, cep, telefone, email) => {
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_address_2').type(complemento)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()


})


