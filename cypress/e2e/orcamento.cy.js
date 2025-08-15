const { faker } = require('@faker-js/faker');
import { ELEMENTS } from "../support/selectors";


describe ('Realização do orçamento preenchendo os campos', () => { 
    
    beforeEach( () => {        
        cy.visit('https://www.fikkitytattoo.com.br/schedule');
        })

    it ('Preenchendo todos os dados válidos', () =>{

        cy.get(ELEMENTS.nomeCompleto).type(nome);
        cy.get(ELEMENTS.idade).type('18');
        cy.get(ELEMENTS.email).type('testeteste@gmail.com');
        cy.get(ELEMENTS.telefone).type('21999999999');
        cy.get(ELEMENTS.primeiraTattoo).click();
        cy.get(ELEMENTS.alergias).click();
        cy.get(ELEMENTS.descricaoAlergia)
        .should('be.visible');
        cy.get('.justify-between > .px-8').click();
        cy.get('.text-2xl').should('be.visible');
        cy.get(ELEMENTS.estilo).select('Blackwork');
        cy.get(ELEMENTS.local).select('Braço');
        cy.get(ELEMENTS.tamanho).select('Pequena (até 5cm)');
        cy.get(ELEMENTS.valor).select('R$ 200 - R$ 500');
        cy.get('.space-y-6 > :nth-child(3) > .w-full').type('Quero uma tatuagem tribal');
        cy.get(ELEMENTS.tattoimg).selectFile('C:/Users/lippi/Documents/Fikkitty/cypress/fixtures/testeimg.jpg', {force: true });
        cy.get(ELEMENTS.anexo).should('be.visible');
        cy.get(ELEMENTS.botaoProximoOrcamento).click();
        cy.get('.text-2xl').should('be.visible');
        cy.get(ELEMENTS.data).realClick().realPress('Enter');
        cy.get(ELEMENTS.horario).select('14:00');
        cy.get(ELEMENTS.localmarcacao).click();
        cy.get(ELEMENTS.botaoProximoOrcamento).click();
        cy.get('.text-2xl')
        .should('be.visible');    
        cy.get(ELEMENTS.botaoProximoOrcamento)
        .invoke('removeAttr', 'target')
        .click();
        cy.get('.text-3xl').should('be.visible');
        cy.contains('h1', 'AGENDAMENTO ENVIADO').should('be.visible');
        cy.get('.inline-flex').click();
        cy.get(ELEMENTS.menu).should('be.visible');
    })
})
