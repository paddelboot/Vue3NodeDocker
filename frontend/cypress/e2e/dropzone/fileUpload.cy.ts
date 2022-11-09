describe( "Upload an image file to the server", () => {

    beforeEach( () => {

        cy.visit( '/upload' )
    })

    it( "Has a dropzone to upload image files", () => {

        cy.get( '.dropzone' ).should( 'contain', 'Drop stuff here' )

    })

    it( "Drops a file in the dropzone", () => {

        cy.get( '.dropzone label' ).selectFile( 'cypress/e2e/dropzone/profilbild.jpg', { action: 'drag-drop' } )

        cy.get('ul.preview' ).should( 'have.descendants', 'li' )
    } )

    it( "Uploads a file", () => {

        cy.get( '.dropzone label' ).selectFile( 'cypress/e2e/dropzone/profilbild.jpg', { action: 'drag-drop' } )

        cy.get( 'button.upload' ).click()

        cy.get('ul.preview>li' ).each( ($el, index, $list) => {

            cy.wrap( $el ).should( 'contain', 'Uploaded' )
        })
    })

    it( "Removes an uploaded file", () => {

        cy.get( '.dropzone label' ).selectFile( 'cypress/e2e/dropzone/profilbild.jpg', { action: 'drag-drop' } )

        cy.get( 'button.upload' ).click()

        cy.get('ul.preview>li' ).each( ($el, index, $list) => {

            cy.wrap( $el ).get( 'button.close-icon' ).click()

        })

        cy.get( 'ul.preview' ).should( 'not.have.descendants', 'li' )

    } )

})