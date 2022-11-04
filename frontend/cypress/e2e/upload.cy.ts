// https://docs.cypress.io/api/introduction/api.html

describe("Show Dropzone", () => {
  it("visits the upload page", () => {
    cy.visit("/upload");
    cy.contains("main .dropzone>label", "Drop stuff here");
  });
});
