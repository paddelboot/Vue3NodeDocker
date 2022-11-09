describe( "Upload an image file to the server", () => {

    beforeEach( () => {

        cy.visit( '/upload' )
    })

    it( "Has a dropzone to upload image files", () => {

        cy.get( '.dropzone' ).should( 'contain', 'Drop stuff here' )

    })

    it( "Drops a file in the dropzone", () => {

        cy.get( '.dropzone label' ).selectFile( 'cypress/e2e/dropzone/profilbild.jpg', { action: 'drag-drop' } )

        expect( document.querySelector('ul.preview' ) ).to.contain( 'li' )
    } )

})