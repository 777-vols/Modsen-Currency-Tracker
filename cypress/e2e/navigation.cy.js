describe('Navbar number of children', () => {
  it('The number of children of the header should be counted', () => {
    cy.visit('/');

    cy.get("[data-cy='navList']").children().should('have.length', 4);
  });
});

describe('Navbar test', () => {
  it('Should check navlinks names', () => {
    cy.visit('/');
    cy.get("[data-cy='nav_Home']").should('have.text', 'Home');
    cy.get("[data-cy='nav_Timeline']").should('have.text', 'Timeline');
    cy.get("[data-cy='nav_Bank card']").should('have.text', 'Bank card');
    cy.get("[data-cy='nav_Contato']").should('have.text', 'Contato');
  });
});

describe('Navigation test', () => {
  it('Should check navigation', () => {
    cy.visit('/');

    cy.get("[data-cy='nav_logo']").click();
    cy.location('pathname').should('eq', '/');

    cy.get("[data-cy='nav_Home']").click();
    cy.location('pathname').should('eq', '/');

    cy.get("[data-cy='nav_Timeline']").click();
    cy.hash().should('eq', '#/timeline');

    cy.get("[data-cy='nav_Bank card']").click();
    cy.hash().should('eq', '#/bankCard');

    cy.get("[data-cy='nav_Contato']").click();
    cy.hash().should('eq', '#/contacts');
  });
});
