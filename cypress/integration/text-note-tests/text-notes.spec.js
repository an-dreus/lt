import loginPage from "../../support/page-objects/login-page"
import experimentsPage from "../../support/page-objects/experiments-page"
import { dateTime } from "../../support/constants"

/// <reference types="cypress" />

describe('Text notes', () => {
    before(() => {
        cy.viewport(1920, 1080)
        loginPage.logIn()
    })

    it('Add text note', () => {
        // Add date/time note to the recent experiment
        experimentsPage.addNote()

        // Check the note is displayed as the most recent
        experimentsPage.recentNoteText
            .should('have.text', dateTime())
    })
})