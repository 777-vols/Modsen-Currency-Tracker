describe('Navbar number of children', () => {
  it('The number of children of the header should be counted', () => {
    cy.visit('/');

    cy.get('#menuList').children().should('have.length', 4);
  });
});

describe('Navbar test', () => {
  it('Should check navlinks names', () => {
    cy.visit('/');
    cy.get("[link_test='menu_home']").should('have.text', 'Home');
    cy.get("[link_test='menu_timeline']").should('have.text', 'Timeline');
    cy.get("[link_test='menu_bankCard']").should('have.text', 'Bank card');
    cy.get("[link_test='menu_contacts']").should('have.text', 'Contato');
  });
});

describe('Navigation test', () => {
  it('Should check navigation', () => {
    cy.visit('/');

    cy.get("[link_test='logo']").click();
    cy.location('pathname').should('eq', '/');

    cy.get("[link_test='menu_home']").click();
    cy.location('pathname').should('eq', '/');

    cy.get("[link_test='menu_timeline']").click();
    cy.location('pathname').should('eq', '/timeline');

    cy.get("[link_test='menu_bankCard']").click();
    cy.location('pathname').should('eq', '/bankCard');

    cy.get("[link_test='menu_contacts']").click();
    cy.location('pathname').should('eq', '/contacts');
  });
});
