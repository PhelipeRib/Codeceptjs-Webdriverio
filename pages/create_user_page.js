const { I } = inject();
var validacao = require('assert')

module.exports = {

  fields: {
    firstName: '#customer_firstname',
    lastName:  '#customer_lastname',
    password:  'passwd',
    address:   '#address1',
    days:      '#days',
    months:    '#months',
    years:     '#years',
    city:      '#city',
    state:     '#id_state',
    postCode:  '#postcode',
    phone:     '#phone_mobile',
  },

  button: {
    male: '#id_gender1',
    register: 'Register'
  },

  messages: {

  },

  labels: {
    createAnAccount: '.page-heading'
  },
  
    fillFieldsCreateUser(name, lastName){
    I.waitForElement(this.fields.firstName, 10)
/*     var tituloPrincipal = await I.grabTextFrom(this.labels.createAnAccount)
    validacao.equal(tituloPrincipal, 'CREATE AN ACCOUNT') */
 
    I.see('CREATE AN ACCOUNT')
    I.click(this.button.male)
    I.fillField(this.fields.firstName,name)
    I.fillField(this.fields.lastName, lastName)  
    I.fillField(this.fields.password, secret('12345'))
    I.scrollTo(this.fields.address) 
    I.selectOption(this.fields.days, '1')
    I.selectOption(this.fields.months, '5')
    I.selectOption(this.fields.years, '1992')
    I.fillField(this.fields.address, 'Rua do Eduardo, 555') 
    I.fillField(this.fields.city, 'Florianópolis')
    I.selectOption(this.fields.state, 'Alabama')
    I.scrollPageToBottom()
    I.fillField(this.fields.postCode, '00000')
    I.fillField(this.fields.phone, '+55 048 999999999')
  },
  
  createUser() {
    I.click(this.button.register)
  }

}


