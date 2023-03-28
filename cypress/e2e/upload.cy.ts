describe('Upload', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should upload image clicking on upload box', () => {
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('not.exist');

    cy.get('#label-file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/success.jpg');

    cy.get('canvas').should('be.visible');

    cy.get('input[type="range"]')
      .invoke('val', 3)
      .should('have.value', 2)
      .trigger('change');

    cy.contains('Save').click();
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('be.visible');
  });

  it('should upload image simulating drag and drop', () => {
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('not.exist');

    cy.get('#label-file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/success.jpg', { action: 'drag-drop' });

    cy.get('canvas').should('be.visible');

    cy.get('input[type="range"]')
      .invoke('val', 3)
      .should('have.value', 2)
      .trigger('change');

    cy.contains('Save').click();
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('be.visible');
  });

  it('should discard image', () => {
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('not.exist');

    cy.get('#label-file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/success.jpg');

    cy.get('canvas').should('be.visible');

    cy.get('.css-kf8gaz-CloseButton').click();
    cy.get('canvas').should('not.exist');
  });
});
