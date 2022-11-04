describe( "show home page", () => {

    it( "visits the home page", () => {

        cy.visit( "/" )
        cy.get( "body section.default main" ).contains( "alle projekte vom hans findet man hier" ) 
    })


})