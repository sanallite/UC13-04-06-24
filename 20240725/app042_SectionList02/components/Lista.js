/* Aula 18 - Componente SectionList, Desafio 2 - Componente da lista */

import React, { useState } from 'react';
import { View, Text, SectionList, Pressable, ScrollView } from 'react-native';
import { estilo } from '../estilos';

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
    /* Matriz que armazena arrays com os países de cada continente */

    const secoes = continentes.map( (continente, index) => ({
        title: continente,
        data: paises[index]
    }) );
    /* Utilizando a função de mapear arrays, iterando sobre cada item, para executar uma função que recebe por parâmetro o item atual do array de continentes, junto com seu índice, e então criando objetos, dentro de um array, com os atributos title e data, que são necessários para criar uma SectionList, com o data sendo o item do array paises que tem o mesmo índice do continente. Essa função retorna os dados que ficam armazenados na constante, que é chamada pela propriedade sections */

    const exibirContinentes = ({ section: { title } }) => (
        /* return ( */
            <View style={ estilo.tituloSecao }>
                <Text style={ estilo.nomeContinente }>{title}</Text>
            </View>
        /* ) Trocando as chaves pelos parânteses faz a função imediatamente retornar um valor */
    )
    /* Extraindo o atributo title do objeto section, que é o objeto enviado pelo método renderSectionHeader. section não é uma variável de parâmetro, por isso não pode ter seu nome alterado, assim como o item, na constante de exibição dos países */

    function exibirCont({section}) {
        return (
            <View>
                <Text>{section.title}</Text>
            </View>
        )
    }
    /* Utilizando a função dessa forma também funciona, mas só se as seções da lista tiverem sido mapeadas corretamente.  */

    const exibirPaises = ({item}) => (
        /* return ( */
            <View style={ estilo.paises }>
                <Pressable onPress={ () => exibirCapitais(item) } /* onFocus={ () => alterarFundo("pressionado") } onBlur={ () => alterarFundo("não_pressionado") } style={{ backgroundColor: corDeFoco }} */>
                    <Text>{item.nome}</Text>
                </Pressable>
            </View>
        /* ) */
    )
    /* Preste atenção no nome dos parâmetros! Nesse caso tem que chamar o item, que é um objeto, não uma variável que armazena parâmetro, e enviar o item para a constante abaixo, aí nessa função você escolhe o nome da variável que vai armazenar o valor recebido, pois esse valor está sendo recebido da constante exibirPaises, não da data do SectionList */

    const exibirCapitais = (pais) => {
        alert("Você clicou no país: " +pais.nome+ ", Sua capital é: " +pais.capital+ ".");

        /* setCor('lightgreen'); */
    }

    /* const [ corDeFoco, setCor ] = useState('lightblue');
    Escute mais sobre como usar o useState em componentes criados por loops ou listas
    const alterarFundo = (estado) => {
        if ( estado == "pressionado" ) {
            setCor('lightgreen');
        }

        else {
            setCor('lightblue');
        }
    } */

    return (
        <ScrollView>
            <SectionList
                /* sections={[ { title: continentes[0], data: paises[0] }, 
                    { title: continentes[1], data: paises[1] },
                    { title: continentes[2], data: paises[2]},
                    { title: continentes[3], data: paises[3]},
                    { title: continentes[4], data: paises[4]},
                    { title: continentes[5], data: paises[5]},
                    { title: continentes[6], data: paises[6]},
                    { title: continentes[7], data: paises[7]}
                ]} Meu mapeamento por essa forma não funcionou... */

                sections={ secoes }

                renderItem={ exibirPaises }

                renderSectionHeader={ exibirContinentes }

                keyExtractor={ (item, index) => item.nome + index }
                /* Definindo como chave primária de cada item da seção como seu atributo nome e seu índice na seção */
            />
        </ScrollView>
    )
}