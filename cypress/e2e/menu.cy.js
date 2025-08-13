import { ELEMENTS } from "../support/selectors"
import { clicarEValidarImagem } from "../support/functions";
import { clicarEValidarImagem2 } from "../support/functions";

describe ('Teste do menu principal do site',  ()=> {

    beforeEach ( () => {
        cy.visit('https://www.fikkitytattoo.com.br/')
    })

    it ('Redirecionamento do botão VER PORTIFÓLIO', () => {
        cy.get(ELEMENTS.botaoVerPortifolio).click();
        cy.get('h2').contains('TRABALHOS RECENTES');
        cy.get(ELEMENTS.imagem1)
        .should('be.visible')
    })  

    it ('Redirecionamento do botão orçamento',  () => {
        cy.get(ELEMENTS.botaoOrcamento).click();
        cy.get('h1').contains('AGENDAMENTO')
        .should('be.visible');
    })
 
    it('Botão de avançar a imagem deve passar para a próxima imagem', () => {
        cy.get(ELEMENTS.container)
        .find('.opacity-100 img')
        .invoke('attr', 'src')
        .then((srcInicial) => {
            clicarEValidarImagem(5, srcInicial);
        });
    });

    it ('Botão de voltar imagem deve inveter a ordem de mostrar as tatuagens', () => {
        cy.get(ELEMENTS.botaoAnterior).click();
        cy.get(ELEMENTS.container)
        .find('.opacity-100 img')
        .invoke('attr', 'src')
        .then((srcInicial) => {
            clicarEValidarImagem2(5, srcInicial);
        })
    })
});