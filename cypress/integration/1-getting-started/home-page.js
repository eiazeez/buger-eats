

  describe('home page', ()=>{

    it('app deve estar funcionando', ()=>{

        cy.viewport(1366, 768)
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('#page-home main h1')

    })

  })