const { I } = inject();

module.exports = {

  button: {
    userName: '.header_user_info'
  },

  validateUserLogged(name, lastName){
    I.waitForElement('.header_user_info')
    I.see(`${name} ${lastName}`)
  }
}

