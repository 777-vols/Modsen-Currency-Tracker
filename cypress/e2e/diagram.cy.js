describe('Check currensy timeline currency select', () => {
  it('Should check name in currency card', () => {
    cy.visit('/timeline');
    cy.get('#timeline-select').select('ARS');
    cy.get('#currency-card-name').should('have.text', 'Peso Argentino');

    cy.get('#timeline-select').select('BTC');
    cy.get('#currency-card-name').should('have.text', 'Bitcoin');

    cy.get('#timeline-select').select('GBP');
    cy.get('#currency-card-name').should('have.text', 'Libra');
  });
});

describe('Check timeline modal inputs', () => {
  it('Should check timeline modal inputs', () => {
    cy.visit('/timeline');
    cy.get('#enter-values').click();

    cy.get('#low-input-1').type(9000);
    cy.get('#low-input-1').should('have.value', '');
    cy.get('#high-input-1').type(10000);
    cy.get('#high-input-1').should('have.value', '10000');

    cy.get('#high-input-2').type(1234);
    cy.get('#high-input-2').should('have.value', '1234');
    cy.get('#low-input-2').type(12312);
    cy.get('#low-input-2').should('have.value', '1231');
  });
});

describe('Check timeline currensy modal, diagram and notification', () => {
  it('Should check timeline modal, diagram and notification', () => {
    cy.visit('/timeline');
    cy.get('#enter-values').click();

    cy.get('#high-input-1').type(10000);
    cy.get('#low-input-1').type(9000);

    cy.get('#high-input-2').type(12000);
    cy.get('#low-input-2').type(11000);

    cy.get('#high-input-3').type(13000);
    cy.get('#low-input-3').type(12000);

    cy.get('#high-input-4').type(14000);
    cy.get('#low-input-4').type(13000);

    cy.get('#high-input-5').type(15000);
    cy.get('#low-input-5').type(14000);

    cy.get('#high-input-6').type(14000);
    cy.get('#low-input-6').type(13000);

    cy.get('#high-input-7').type(16000);
    cy.get('#low-input-7').type(15000);

    cy.get('#high-input-8').type(15000);
    cy.get('#low-input-8').type(13500);

    cy.get('#high-input-9').type(17000);
    cy.get('#low-input-9').type(16500);

    cy.get('#high-input-10').type(18000);
    cy.get('#low-input-10').type(17900);

    cy.get('#high-input-11').type(10000);
    cy.get('#low-input-11').type(9000);

    cy.get('#high-input-12').type(12000);
    cy.get('#low-input-12').type(11000);

    cy.get('#high-input-13').type(13000);
    cy.get('#low-input-13').type(12000);

    cy.get('#high-input-14').type(14000);
    cy.get('#low-input-14').type(13000);

    cy.get('#high-input-15').type(15000);
    cy.get('#low-input-15').type(14000);

    cy.get('#high-input-16').type(14000);
    cy.get('#low-input-16').type(13000);

    cy.get('#high-input-17').type(16000);
    cy.get('#low-input-17').type(15000);

    cy.get('#high-input-18').type(15000);
    cy.get('#low-input-18').type(13500);

    cy.get('#high-input-19').type(19000);
    cy.get('#low-input-19').type(18500);

    cy.get('#high-input-20').type(18500);
    cy.get('#low-input-20').type(18000);

    cy.get('#high-input-21').type(10000);
    cy.get('#low-input-21').type(9000);

    cy.get('#high-input-22').type(12000);
    cy.get('#low-input-22').type(11000);

    cy.get('#high-input-23').type(13000);
    cy.get('#low-input-23').type(12000);

    cy.get('#high-input-24').type(14000);
    cy.get('#low-input-24').type(13000);

    cy.get('#high-input-25').type(15000);
    cy.get('#low-input-25').type(14000);

    cy.get('#high-input-26').type(14000);
    cy.get('#low-input-26').type(13000);

    cy.get('#high-input-27').type(16000);
    cy.get('#low-input-27').type(15000);

    cy.get('#high-input-28').type(15000);
    cy.get('#low-input-28').type(13500);

    cy.get('#high-input-29').type(17000);
    cy.get('#low-input-29').type(16500);

    cy.get('#high-input-30').type(18000);
    cy.get('#low-input-30').type(17900);

    cy.get('#chart-modal-close').click();

    cy.get('canvas').should('have.length', 1);
    cy.get('#timeline-notification').should('have.length', 1);
  });
});
