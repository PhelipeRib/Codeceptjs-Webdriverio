const{ I } = inject()
const cpfName = require('../utils/cpf_name')

Feature('Login');

BeforeSuite(() => {
    console.log(cpfName.cpfName())
})

Before(() => {
    I.amOnPage('/')
})

After(() => {
    console.log('After')
})

AfterSuite(() => {
    console.log('Depois de tudo')
})

Scenario('Validade Empty E-mail on Create Account',  ({I}) => {
    I.click(".login")
    I.click('#SubmitCreate')
    I.see("Invalid email address.")
});

Scenario('Validade Empty E-mail on Create Account2',  ({I}) => {
    I.click(".login")
});

Scenario('Validade Empty E-mail on Create Account3',  ({I}) => {
    I.click(".login")
});
