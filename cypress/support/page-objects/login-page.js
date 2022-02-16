class LoginPage {

  get emailField() {
    return cy.get("input#email");
  }
  get continueBtn() {
    return cy.get("button[data-continue]");
  }
  get passwordField() {
    return cy.get("input#password");
  }
  get showPasswordBtn() {
    return cy.get("button.LT-input_revealPassword");
  }
  get submitBtn() {
    return cy.get("button[data-submit]");
  }
  get errorNotification() {
    return cy.get("div.LT-notification_text");
  }

  logIn() {
    const username = Cypress.env("creds").username;
    const pwd = Cypress.env("creds").pwd;
    cy.visit('/');

    this.emailField
        .type(username);
    this.continueBtn
        .click();

    // this.showPasswordBtn.click()
    this.passwordField
        .type(pwd);
    this.submitBtn
        .click();
  }
}

export default new LoginPage();