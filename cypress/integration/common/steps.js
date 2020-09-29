// Steps/passos comuns a mais de uma feature

Given(/^que acesso site$/, () => {
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
});