describe( "show home page", () => {

    it( "visits the home page", () => {

        cy.visit( "/" )
        cy.get( "body section.default main" ).should( "contain", "alle projekte vom hans findet man hier" ) 
    })

})