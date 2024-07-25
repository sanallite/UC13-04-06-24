/* Aula 18 - Componente SectionList, Desafio 2 - Componente da lista */

import React from 'react';
import { View, Text, SectionList, Pressable, Alert } from 'react-native';

export default function Lista() {
    const continentes = ['América do Norte', 'América Central', 'América do Sul', 'Europa', 'África', 'Ásia', 'Oceania'];

    const paises = [
        /* América do Norte */
        [   {nome: 'Canadá', capital: 'Ottawa'}, 
            {nome: 'Estados Unidos', capital: 'Washington D.C.'},
            {nome: 'México', capital: 'Cidade do México'}
        ],

        /* América Central */
        [   {nome: 'Guatemala', capital: 'Cidade da Guatemala'},
            {nome: 'Honduras', capital: 'Tegucigalpa'},
            {nome: 'Nicarágua', capital: 'Manágua'}
        ],

        /* América do Sul */
        [   {nome: 'Brasil', capital: 'Brasília'},
            {nome: 'Uruguai', capital: 'Montevidéu'},
            {nome: 'Argentina', capital: 'Buenos Aires'},
            {nome: 'Chile', capital: 'Santiago'},
            {nome: 'Paraguai', capital: 'Assunção'},
            {nome: 'Bolívia', capital: 'Sucre'},
            {nome: 'Peru', capital: 'Lima'},
            {nome: 'Equador', capital: 'Quito'},
            {nome: 'Colombia', capital: 'Bogotá'},
            {nome: 'Venezuela', capital: 'Caracas'},
            {nome: 'Guiana', capital: 'Georgetown'},
            {nome: 'Suriname', capital: 'Paramaribo'}
        ],

        /* Europa */
        [   {nome: 'Portugal', capital: 'Lisboa'},
            {nome: 'Espanha', capital: 'Madrid'},
            {nome: 'França', capital: 'Paris'},
            {nome: 'Itália', capital: 'Roma'},
            {nome: 'Alemanha', capital: 'Berlim'},
            {nome: 'Polônia', capital: 'Varsóvia'},
            {nome: 'Hungria', capital: 'Budapeste'},
            {nome: 'Romênia', capital: 'Bucareste'},
            {nome: 'Grécia', capital: 'Atenas'} 
        ],
        
        /* África */
        [ 
            {nome: 'Cabo Verde', capital: 'Praia'}, 
            {nome: 'Marrocos', capital: 'Rabat'},
            {nome: 'Algéria', capital: 'Argel'}, 
            {nome: 'Egito', capital: 'Cairo'}, 
            {nome: 'Etiópia', capital: 'Adis Abeba'}, 
            {nome: 'Quênia', capital: 'Nairóbi'}, 
            {nome: 'Angola', capital: 'Luanda'}, 
            {nome: 'Moçambique', capital: 'Maputo'}, 
            {nome: 'África do Sul', capital: 'Pretória'} 
        ],

        /* Ásia */
        [ 
            {nome: 'Rússia', capital: 'Moscovo'},
            {nome: 'Turquia', capital: 'Ancara'},
            {nome: 'Irã', capital: 'Teerão'},
            {nome: 'Índia', capital: 'Nova Deli'},
            {nome: 'China', capital: 'Pequim'},
            {nome: 'Coréia do Sul', capital: 'Seul'},
            {nome: 'Japão', capital: 'Tóquio'},
            {nome: 'Filipinas', capital: 'Manila'},
            {nome: 'Taiwan', capital: 'Taipé'},
            {nome: 'Timor Leste', capital: 'Díli'} 
        ],

        /* Oceania */
        [ 
            {nome: 'Australia', capital: 'Camberra'}, 
            {nome: 'Nova Zelândia', capital: 'Wellington'} 
        ]
    ];

    const sessoes = continentes.map( (continente, index) => ({
        title: continente,
        data: paises[index]
    }) );

    const exibirContinentes = ({ section: { title } }) => (
        /* return ( */
            <View>
                <Text>{title}</Text>
            </View>
        /* ) */
    )
    /* Recebendo o atributo titulo da seção */

    const exibirPaises = ({item}) => (
        /* return ( */
            <View>
                <Pressable onPress={ () => exibirCapitais(item) }>
                    <Text>{item.nome}</Text>
                </Pressable>
            </View>
        /* ) */
    )
    /* Preste atenção no nome dos parâmetros! Alguns não funcionam se você mudar, nesse caso tem que chamar o item, que é um objeto, e enviar o item para a função abaixo, aí nessa função você escolhe o nome da variável que vai armazenar o valor. */

    const exibirCapitais = (pais) => {
        alert("Você clicou no país: " +pais.nome+ ", Sua capital é: " +pais.capital+ ".")
    }

    return (
        <View>
            <SectionList
                /* sections={[ { title: continentes[0], data: paises[0] }, 
                    { title: continentes[1], data: paises[1] },
                    { title: continentes[2], data: paises[2]},
                    { title: continentes[3], data: paises[3]},
                    { title: continentes[4], data: paises[4]},
                    { title: continentes[5], data: paises[5]},
                    { title: continentes[6], data: paises[6]},
                    { title: continentes[7], data: paises[7]}
                ]} */

                sections={ sessoes }

                renderItem={ exibirPaises }

                renderSectionHeader={ exibirContinentes }

                keyExtractor={ (item, index) => item.nome + index }
            />
        </View>
    )
}