const { I } = inject();

module.exports = {

  fields: {
    emailAddressRegisterField: '#email_create'
  },

  button: {
    createAccountButton: '#SubmitCreate'
  },

  messages: {

  },
  
  submitCreateNewAccount(email){
    I.fillField(this.fields.emailAddressRegisterField, email)
    I.click(this.button.createAccountButton)
  }
}
