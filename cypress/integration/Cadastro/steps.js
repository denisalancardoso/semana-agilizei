// Implementação dos passos descritos na feature

/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

When(/^informar meus dados$/, () => {
	//type
    cy.get('input[placeholder="First Name"]').type(chance.first());
    cy.get('input[ng-model^="Last"]').type(chance.last());
    cy.get('input[ng-model^="Email"]').type(chance.email());
    cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false }));

    // Check -> Radio´s e checkboxes
    cy.get('input[value=FeMale]').check();
    cy.get('input[type=checkbox]').check('Cricket');     
    cy.get('input[type=checkbox]').check('Hockey');

    // select -> select & select2 (Combos)
    cy.get('select#Skills').select('Javascript');
    cy.get('select#countries').select('Australia');     
    cy.get('select#country').select('Hong Kong', { force: true });     
    cy.get('select#yearbox').select('1985');
    cy.get('select[ng-model^=month]').select('August');
    cy.get('select#daybox').select('5');

    cy.get('input#firstpassword').type('Agilizei@2020');
    cy.get('input#secondpassword').type('Agilizei@2020');

    // attach file -> input file
    cy.get('input#imagesrc').attachFile('captura.png');

});

When(/^Salvar$/, () => {
    // click
    cy.get('button#submitbtn').click('center');	
});

Then(/^devo ser cadastrado com sucesso$/, () => {

    cy.wait('@postNewtable').then((resNewtable) => {
        console.log(resNewtable.status)
        cy.log(resNewtable.status)

        // chai
        expect(resNewtable.status).to.eq(200)

    });

    cy.wait('@postUsertable').then((resUsertable) => {
        // chai
        expect(resUsertable.status).to.eq(200)
    });

    cy.wait('@getNewtable').then((resNewtable) => {
        // chai
        expect(resNewtable.status).to.eq(200)
    });

    cy.url().should('contain', 'WebTable');

});
