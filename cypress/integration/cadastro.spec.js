// https://agilizei.com/semana-agilizei/
// httpes:agilizei-bootcamp.club.hotmart.com
// https://demo.automationtesting.in/

/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        
        // Rotas
        // POST 200 -> /api/1/databases/userdetails/collections/newtable?
        // POST 200 -> /api/1/databases/userdetails/collections/usertable?
        // GET 200 -> /api/1/databases/userdetails/collections/newtable?

        cy.server();

        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
            .as('postNewtable');

        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**')
            .as('postUsertable');
        
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
            .as('getNewtable');

        // baseUrl + Register.html
        cy.visit('Register.html');

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

        // click
        cy.get('button#submitbtn').click('center');

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

        cy.url().should('contain', 'WebTable')

    });
});

// Describe/Context
// - Contexto: Cadastro
// - Cenários: Cadastrar novo usuário, Tentar cadastrar usuário com email duplicado, etc

// Elementos
// input[placeholder="First Name"]
// input[ng-model^="Last"]
// input[ng-model^="Email"]
// input[ng-model^="Phone"]

// input[value=FeMale]
// input[type=checkbox]

// select#Skills
// select#countries
// select#country
// select#yearbox
// select[ng-model^=month]
// select#daybox
