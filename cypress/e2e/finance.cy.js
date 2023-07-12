
describe('Transacoes', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('Cadastrar Entrada', () => {
        
        NovaTransacao("Aline", 6000)
       
        
       cy.get("tbody tr td.description").should("have.text", "Aline")

    });

    it('Transcao de saida', () => {
       NovaTransacao("Livro", -200)
       cy.get("tbody tr td.description").should("have.text","Livro")
    
    });

    it('Excluir Transacao', () => {
        NovaTransacao("Aline", 100 )
        NovaTransacao("Novo contrato", 4000)
        NovaTransacao("Auditoria", 5000 )
         
        cy.contains(".description", "Aline")
        .parent()
        .find('img')
        .click()

        cy.contains(".description", "Auditoria")
        .parent()
        .find('img')
        .click()
    });
});

function NovaTransacao(descricao, valor){

    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-07-08") //yyyy-mm-dd
    cy.contains('button', 'Salvar').click()

}