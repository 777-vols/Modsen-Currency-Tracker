describe('Check currensy timeline currency select', () => {
  it('Should check name in currency card', () => {
    cy.visit('#/timeline');
    cy.get('#timeline-select').type('Yen{enter}{enter}');
    cy.get('#currency-card-name').should('have.text', 'Yen');

    cy.get('#timeline-select').type('Bitcoin{enter}{enter}');
    cy.get('#currency-card-name').should('have.text', 'Bitcoin');

    cy.get('#timeline-select').type('Libra{enter}{enter}');
    cy.get('#currency-card-name').should('have.text', 'Libra');
  });
});

describe('Check timeline modal inputs', () => {
  it('Should check timeline modal inputs', () => {
    cy.visit('#/timeline');
    cy.get('#enter-values').click();

    cy.get('#low-input-1').type(9000);
    cy.get('#low-input-1').should('have.value', '');
    cy.get('#high-input-1').type(10000);
    cy.get('#high-input-1').should('have.value', '10000');

    cy.get('#high-input-2').type(1234);
    cy.get('#high-input-2').should('have.value', '1234');
    cy.get('#low-input-2').type(12312);
    cy.get('#low-input-2').should('have.value', '1231');

    cy.get('#high-input-3').type(100000);
    cy.get('#high-input-3').should('have.value', '10000');
    cy.get('#low-input-3').type(-5000);
    cy.get('#low-input-3').should('have.value', '5000');
  });
});

describe('Check timeline currensy modal, diagram and notification', () => {
  it('Should check timeline modal, diagram and notification', () => {
    cy.visit('#/timeline');
    cy.get('#enter-values').click();

    cy.get('#high-input-1').type(1000);
    cy.get('#low-input-1').type(900);

    cy.get('#high-input-2').type(1200);
    cy.get('#low-input-2').type(1100);

    cy.get('#high-input-3').type(1300);
    cy.get('#low-input-3').type(1200);

    cy.get('#high-input-4').type(1400);
    cy.get('#low-input-4').type(1300);

    cy.get('#high-input-5').type(1500);
    cy.get('#low-input-5').type(1400);

    cy.get('#high-input-6').type(1400);
    cy.get('#low-input-6').type(1300);

    cy.get('#high-input-7').type(1600);
    cy.get('#low-input-7').type(1500);

    cy.get('#high-input-8').type(1500);
    cy.get('#low-input-8').type(1350);

    cy.get('#high-input-9').type(1700);
    cy.get('#low-input-9').type(1650);

    cy.get('#high-input-10').type(1800);
    cy.get('#low-input-10').type(1790);

    cy.get('#high-input-11').type(1000);
    cy.get('#low-input-11').type(900);

    cy.get('#high-input-12').type(1200);
    cy.get('#low-input-12').type(1100);

    cy.get('#high-input-13').type(1300);
    cy.get('#low-input-13').type(1200);

    cy.get('#high-input-14').type(1400);
    cy.get('#low-input-14').type(1300);

    cy.get('#high-input-15').type(1500);
    cy.get('#low-input-15').type(1400);

    cy.get('#high-input-16').type(1400);
    cy.get('#low-input-16').type(1300);

    cy.get('#high-input-17').type(1600);
    cy.get('#low-input-17').type(1500);

    cy.get('#high-input-18').type(1500);
    cy.get('#low-input-18').type(1350);

    cy.get('#high-input-19').type(1900);
    cy.get('#low-input-19').type(1850);

    cy.get('#high-input-20').type(1850);
    cy.get('#low-input-20').type(1800);

    cy.get('#high-input-21').type(1000);
    cy.get('#low-input-21').type(900);

    cy.get('#high-input-22').type(1200);
    cy.get('#low-input-22').type(1100);

    cy.get('#high-input-23').type(1300);
    cy.get('#low-input-23').type(1200);

    cy.get('#high-input-24').type(1400);
    cy.get('#low-input-24').type(1300);

    cy.get('#high-input-25').type(1500);
    cy.get('#low-input-25').type(1400);

    cy.get('#high-input-26').type(1400);
    cy.get('#low-input-26').type(1300);

    cy.get('#high-input-27').type(1600);
    cy.get('#low-input-27').type(1500);

    cy.get('#high-input-28').type(1500);
    cy.get('#low-input-28').type(1350);

    cy.get('#high-input-29').type(1700);
    cy.get('#low-input-29').type(1650);

    cy.get('#high-input-30').type(1800);
    cy.get('#low-input-30').type(1790);

    cy.get('#createSchedule').click();

    cy.get('canvas').should('have.length', 1);
    cy.get('#timeline-notification').should('have.length', 1);
  });
});
