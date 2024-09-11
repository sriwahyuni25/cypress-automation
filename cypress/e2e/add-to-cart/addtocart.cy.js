describe('user success add to chart', () => {
    beforeEach(() => {
        cy .visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label', {timeout : 10000}).should('be.visible')
    })

    it('user sucessfull add product to chart', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('.btn_primary').click()
        cy.get('.fa-layers-counter').click()
        cy.get('.subheader').should('be.visible')
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack')
    })
})