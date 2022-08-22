const { I } = inject();

module.exports = {

  fields: {

  },

  button: {
    loginButton: '.login'
  },

  messages: {

  },

  acessLoginPage() {
    I.click(this.button.loginButton)
  }
}
