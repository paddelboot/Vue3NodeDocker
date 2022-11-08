describe( "Upload an image file to the server", () => {

    it( "drops a file in the dropzone", () => {

        cy.document().selectFile( 'profilbild.jpg', { action: 'drag-drop'} )
    } )

})