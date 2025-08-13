import { ELEMENTS } from "./selectors";

export function clicarEValidarImagem(nCliques, imgAnterior = null) {
    if (nCliques === 0) return;
  
    cy.get(ELEMENTS.botaoProximo).click();
  
    cy.get(ELEMENTS.container)
      .find('.opacity-100 img')
      .invoke('attr', 'src')
      .should((srcAtual) => {
        if (imgAnterior !== null) {
          expect(srcAtual).not.to.eq(imgAnterior);
        }
      })
      .then((srcAtual) => {
        clicarEValidarImagem(nCliques - 1, srcAtual);
      });
}

export function clicarEValidarImagem2(nCliques, imgAnterior = null) {
    if (nCliques === 0) return;
      
    cy.get(ELEMENTS.botaoAnterior).click();
    
    cy.get(ELEMENTS.container)
      .find('.opacity-100 img')
      .invoke('attr', 'src')
      .should((srcAtual) => {
        if (imgAnterior !== null) {
          expect(srcAtual).not.to.eq(imgAnterior);
        }
      })
      .then((srcAtual) => {
        clicarEValidarImagem2(nCliques - 1, srcAtual);
      });
}
