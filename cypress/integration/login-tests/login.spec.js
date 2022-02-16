import loginPage from "../../support/page-objects/login-page"
import experimentsPage from "../../support/page-objects/experiments-page"

/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    it('Redirect to login', () => {
        cy.visit('/')
        cy.url()
            .should('include', '/#/login')
    })

    it('Basic log in', () => {
        loginPage.logIn()

        // User lands on Experiments section on successful log-in
        cy.url()
            .should('include', '/#/experiments')
        experimentsPage.experimentsTab
            .should('have.class', 'is-active')
        // User menu is available for authenticated users
        experimentsPage.userMenu
            .should('exist')
    })
})