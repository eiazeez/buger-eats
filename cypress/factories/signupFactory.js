var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function (){

            var firstName = faker.name.firstName()
            var lastName = faker.name.lastName()

            var data = {

                name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '85999161700',
                address: {
            
                    postalcode: '60751090',
                    street: 'Rua 91',
                    number: '50',
                    district: 'Prefeito José Walter',
                    city_state: 'Fortaleza/CE'
            
                },
                'delivery_method': 'Moto',
                'cnh': 'cnh-digital.jpg'
                
                }

                return data

    }

}