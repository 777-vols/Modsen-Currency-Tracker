describe('Convert 10 usd to btc', () => {
  it('Should open the converter and convert 10 usd to btc', () => {
    cy.request({
      method: 'GET',
      url: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
    }).then((response) => {
      const result = `${((1 / response.body.usd.usd) * (1 * response.body.usd.btc) * 10).toFixed(
        4
      )}`;
      cy.visit('/');
      cy.get('#card-usd').click();
      cy.get("[data-cy='homeModal-input']").type('{backspace}10');
      cy.get('#homeModal-select').type('btc{enter}{enter}');
      cy.get('#converter-result').should('have.text', result);
    });
  });
});

describe('Convert 0.5 btc to usd', () => {
  it('Should open the converter and convert 0.5 btc to usd', () => {
    cy.request({
      method: 'GET',
      url: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
    }).then((response) => {
      const result = `${((1 / response.body.usd.btc) * (1 * response.body.usd.usd) * 0.5).toFixed(
        4
      )}`;
      cy.visit('/');
      cy.get('#card-btc').click();
      cy.get("[data-cy='homeModal-input']").type('{backspace}0.5');
      cy.get('#converter-result').should('have.text', result);
    });
  });
});

describe('Convert string to btc', () => {
  it('Should return NaN', () => {
    cy.visit('/');
    cy.get('#card-usd').click();
    cy.get("[data-cy='homeModal-input']").type('{backspace}somedata');
    cy.get('#homeModal-select').type('btc{enter}{enter}');
    cy.get('#converter-result').should('have.text', 'NaN');
  });
});

describe('Convert dot to btc', () => {
  it('Should return NaN', () => {
    cy.visit('/');
    cy.get('#card-usd').click();
    cy.get("[data-cy='homeModal-input']").type('{backspace}.');
    cy.get('#homeModal-select').type('btc{enter}{enter}');
    cy.get('#converter-result').should('have.text', 'NaN');
  });
});

describe('Convert string empty string to btc', () => {
  it('Should return 0.00000', () => {
    cy.visit('/');
    cy.get('#card-usd').click();
    cy.get("[data-cy='homeModal-input']").type('{backspace}');
    cy.get('#homeModal-select').type('btc{enter}{enter}');
    cy.get('#converter-result').should('have.text', '0.0000');
  });
});
