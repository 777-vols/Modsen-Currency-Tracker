describe('Themes changrer test', () => {
  it('Should check themes changer', () => {
    cy.visit('/');
    cy.get('header label').click();
    cy.get('#root div')
      .first()
      .should('have.css', 'background-color', `rgb(236, 236, 236)`)
      .should('have.css', 'color', `rgb(3, 3, 4)`);

    cy.get('header label').click();
    cy.get('#root div')
      .first()
      .should('have.css', 'background-color', `rgb(3, 3, 4)`)
      .should('have.css', 'color', `rgb(255, 255, 255)`);
  });
});
