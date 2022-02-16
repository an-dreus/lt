import { dateTime } from "../../support/constants"

class ExperimentsPage {

    get userMenu() {
        return cy.get("div.user-menu")
    }
    get experimentsTab() {
        return cy.get("div#tab-Experiments")
    }
    get recentExperiment() {
        return cy.get("div.experiment-tile-wrapper:nth-child(1)")
    }
    get createNoteBtn() {
        return cy.get("button[class*='subsection-header__create-button']")
    }
    get notesTextArea() {
        return cy.get("textarea.el-textarea__inner")
    }
    get saveNoteBtn() { // Create btn (textarea)
        return cy.get("button[data-save-button]")
    }
    get recentNoteText() {
        return cy.get("div.note:nth-child(1) div.note-view-mode__text")
    }

    addNote() { // Add date/time note to the recent experiment
        this.recentExperiment
            .click()
        this.createNoteBtn
            .click()
        this.notesTextArea
            .type(dateTime())
        this.saveNoteBtn.click()
    }
}

export default new ExperimentsPage();