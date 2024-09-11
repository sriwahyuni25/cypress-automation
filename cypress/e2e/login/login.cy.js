/* Test case(it)
    1. success login
        - masuk ke web
        - masukkan username
        - masukkan password
        - tekan tombol login
        - validasi login di halaman product
*/

describe('user succes login using valid data', () => {
    beforeEach(() => {
        cy .visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#login-button', {timeout : 10000}).should('be.visible')
        cy.get('.login_logo', {timeout : 10000}).should('be.visible')
    })
    it('succes login use standart user', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label', {timeout : 10000}).should('be.visible')
    })

    it('succes login use problem user', () => {
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label', {timeout : 10000}).should('be.visible')
    })
})

describe('user failed to login', () => {
    beforeEach(() => {
        cy .visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#login-button').should('be.visible')
        cy.get('.login_logo').should('be.visible')
    })
    it('login with blank password', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain','Password is required')
    })

    it('login with locked out user', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
    })
})