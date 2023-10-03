describe('Check currensy timeline currency select', () => {
  it('Should check name in currency card', () => {
    cy.visit('#/timeline');
    cy.get('#timeline-select').type('Yen{enter}{enter}');
    cy.get("[data-cy='currency-card-name']").should('have.text', 'Yen');

    cy.get('#timeline-select').type('Bitcoin{enter}{enter}');
    cy.get("[data-cy='currency-card-name']").should('have.text', 'Bitcoin');

    cy.get('#timeline-select').type('Libra{enter}{enter}');
    cy.get("[data-cy='currency-card-name']").should('have.text', 'Libra');
  });
});

describe('Check timeline modal inputs', () => {
  it('Should check timeline modal inputs', () => {
    cy.visit('#/timeline');
    cy.get("[data-cy='enter-values']").click();

    cy.get("[data-cy='low-input-1']").type(9000);
    cy.get("[data-cy='low-input-1']").should('have.value', '');
    cy.get("[data-cy='high-input-1']").type(10000);
    cy.get("[data-cy='high-input-1']").should('have.value', '10000');
    cy.get("[data-cy='clearAllValues']").click();
    cy.get("[data-cy='low-input-1']").should('have.value', '');
    cy.get("[data-cy='high-input-1']").should('have.value', '');

    cy.get("[data-cy='high-input-2']").type(1234);
    cy.get("[data-cy='high-input-2']").should('have.value', '1234');
    cy.get("[data-cy='low-input-2']").type(12312);
    cy.get("[data-cy='low-input-2']").should('have.value', '1231');

    cy.get("[data-cy='high-input-3']").type(100000);
    cy.get("[data-cy='high-input-3']").should('have.value', '10000');
    cy.get("[data-cy='low-input-3']").type(-5000);
    cy.get("[data-cy='low-input-3']").should('have.value', '5000');
  });
});

describe('Check timeline currensy modal, diagram and notification', () => {
  it('Should check timeline modal, diagram and notification', () => {
    cy.visit('#/timeline');
    cy.get("[data-cy='enter-values']").click();

    cy.get("[data-cy='high-input-1']").type(1000);
    cy.get("[data-cy='low-input-1']").type(900);

    cy.get("[data-cy='high-input-2']").type(1200);
    cy.get("[data-cy='low-input-2']").type(1100);

    cy.get("[data-cy='high-input-3']").type(1300);
    cy.get("[data-cy='low-input-3']").type(1200);

    cy.get("[data-cy='high-input-4']").type(1400);
    cy.get("[data-cy='low-input-4']").type(1300);

    cy.get("[data-cy='high-input-5']").type(1500);
    cy.get("[data-cy='low-input-5']").type(1400);

    cy.get("[data-cy='high-input-6']").type(1400);
    cy.get("[data-cy='low-input-6']").type(1300);

    cy.get("[data-cy='high-input-7']").type(1600);
    cy.get("[data-cy='low-input-7']").type(1500);

    cy.get("[data-cy='high-input-8']").type(1500);
    cy.get("[data-cy='low-input-8']").type(1350);

    cy.get("[data-cy='high-input-9']").type(1700);
    cy.get("[data-cy='low-input-9']").type(1650);

    cy.get("[data-cy='high-input-10']").type(1800);
    cy.get("[data-cy='low-input-10']").type(1790);

    cy.get("[data-cy='high-input-11']").type(1000);
    cy.get("[data-cy='low-input-11']").type(900);

    cy.get("[data-cy='high-input-12']").type(1200);
    cy.get("[data-cy='low-input-12']").type(1100);

    cy.get("[data-cy='high-input-13']").type(1300);
    cy.get("[data-cy='low-input-13']").type(1200);

    cy.get("[data-cy='high-input-14']").type(1400);
    cy.get("[data-cy='low-input-14']").type(1300);

    cy.get("[data-cy='high-input-15']").type(1500);
    cy.get("[data-cy='low-input-15']").type(1400);

    cy.get("[data-cy='high-input-16']").type(1400);
    cy.get("[data-cy='low-input-16']").type(1300);

    cy.get("[data-cy='high-input-17']").type(1600);
    cy.get("[data-cy='low-input-17']").type(1500);

    cy.get("[data-cy='high-input-18']").type(1500);
    cy.get("[data-cy='low-input-18']").type(1350);

    cy.get("[data-cy='high-input-19']").type(1900);
    cy.get("[data-cy='low-input-19']").type(1850);

    cy.get("[data-cy='high-input-20']").type(1850);
    cy.get("[data-cy='low-input-20']").type(1800);

    cy.get("[data-cy='high-input-21']").type(1000);
    cy.get("[data-cy='low-input-21']").type(900);

    cy.get("[data-cy='high-input-22']").type(1200);
    cy.get("[data-cy='low-input-22']").type(1100);

    cy.get("[data-cy='high-input-23']").type(1300);
    cy.get("[data-cy='low-input-23']").type(1200);

    cy.get("[data-cy='high-input-24']").type(1400);
    cy.get("[data-cy='low-input-24']").type(1300);

    cy.get("[data-cy='high-input-25']").type(1500);
    cy.get("[data-cy='low-input-25']").type(1400);

    cy.get("[data-cy='high-input-26']").type(1400);
    cy.get("[data-cy='low-input-26']").type(1300);

    cy.get("[data-cy='high-input-27']").type(1600);
    cy.get("[data-cy='low-input-27']").type(1500);

    cy.get("[data-cy='high-input-28']").type(1500);
    cy.get("[data-cy='low-input-28']").type(1350);

    cy.get("[data-cy='high-input-29']").type(1700);
    cy.get("[data-cy='low-input-29']").type(1650);

    cy.get("[data-cy='high-input-30']").type(1800);
    cy.get("[data-cy='low-input-30']").type(1790);

    cy.get("[data-cy='createSchedule']").click();

    cy.get('canvas').should('have.length', 1);
    cy.get("[data-cy='timeline-notification']").should('have.length', 1);
  });
});
