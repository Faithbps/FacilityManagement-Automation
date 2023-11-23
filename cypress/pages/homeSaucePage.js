class homeSaucePage{

    elements= {

        usernameInput: () => cy.get(':nth-child(2) > .input-wrapper > .undefined'),
        passwordInput: () => cy.get(':nth-child(3) > .input-wrapper > .undefined'),
        loginBtn: () => cy.get('.btn'),
        //errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
}
    typePassword(password){
        this.elements.passwordInput().type(password);
}
    clickLogin(){
        this.elements.loginBtn().click();

    }

}

module.exports = new homeSaucePage();