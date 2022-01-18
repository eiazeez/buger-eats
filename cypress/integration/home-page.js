

  describe('home page', ()=>{

    it('app deve estar funcionando', ()=>{
        cy.visit('/')
        cy.get('#page-home main h1')

    })

  })