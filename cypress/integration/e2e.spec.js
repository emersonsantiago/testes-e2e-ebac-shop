/// <reference types="cypress" />


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.comprar('0', 'Green', 'S')
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        cy.comprar('1', 'Black', 'XS')
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        cy.comprar('2', 'Blue', '36')
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        cy.comprar('3', 'Blue', 'XS')
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        cy.checkout('Emerson', 'Santiago', 'Brasil', 'Rua Engenheiro Oscar Ferreira', 'Ap 000', 'Recife', 'Pernambuco', '52061-022', '81998743079', 'emersoncostasantiago@gmail.com')
        cy.get('.woocommerce-notice').should('contain', 'Seu pedido foi recebido')
    });



})