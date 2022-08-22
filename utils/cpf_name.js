const {generate} = require('gerador-validador-cpf')

/* console.log(cpf)
console.log(validate(cpf)) */

const cpfName = () => {
    var cpf = generate({format: true})
    var cpfAndName = cpf + ' - Phelipe Ribeiro'
    return cpfAndName
}
exports.cpfName = cpfName