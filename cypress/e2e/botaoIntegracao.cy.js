import { ELEMENTS } from "../support/selectors";

describe ('Teste de funcionalidade dos botões de integração', () => {

    beforeEach(() => {
        cy.visit('https://www.fikkitytattoo.com.br/');
    })

    it ('Redirecionamento do botão WhatsApp para o domínio correto', () => {
        cy.get(ELEMENTS.botaoWhatsapp)
        .should('have.attr', 'href')
        .and('include', 'wa.me');
        cy.get(ELEMENTS.botaoWhatsapp)
        .invoke('removeAttr', 'target')
        .click();
    })

    it ('Redirecionamento do botão Instagram para o domínio correto', () => {
        cy.get(ELEMENTS.botaoInstagram)
        .should('have.attr', 'href')
        .and('include', 'instagram.com/fikkity.tattoo')
        cy.get(ELEMENTS.botaoInstagram)
        .invoke('removeAttr', 'target')
        .click();
    })
})