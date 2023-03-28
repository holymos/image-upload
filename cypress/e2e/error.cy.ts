describe('Error', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should not be able upload invalid file', () => {
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('not.exist');

    cy.get('#label-file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/error.txt');

    cy.get('canvas').should('not.exist');
  });

  it('should get error on drag and drop invalid file', () => {
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('not.exist');

    cy.get('#label-file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/error.txt', { action: 'drag-drop' });

    cy.get('canvas').should('not.exist');

    cy.contains('Sorry, the upload failed.').should('be.visible');
    cy.contains('Try again').should('be.visible');
  });

  it('should clear error and be able to try again clicking on close button', () => {
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('not.exist');

    cy.get('#label-file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/error.txt', { action: 'drag-drop' });

    cy.get('.css-kf8gaz-CloseButton').click();

    cy.contains('Sorry, the upload failed.').should('not.exist');
    cy.contains('Try again').should('not.exist');
  });

  it('should clear error and be able to try again clicking on try again button', () => {
    cy.get('.css-1iffzsp-AvatarImage-AvatarImage').should('not.exist');

    cy.get('#label-file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/error.txt', { action: 'drag-drop' });

    cy.get('.css-1ehb6m7-ErrorMessage-ErrorMessage > button').click();

    cy.contains('Sorry, the upload failed.').should('not.exist');
    cy.contains('Try again').should('not.exist');
  });
});
