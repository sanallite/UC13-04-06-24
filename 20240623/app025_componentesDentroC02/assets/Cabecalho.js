/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos'

function Cabecalho() {
    let doutorImg = require('../img/img1.png');
    let carterinhaImg = require('../img/img2.png');
    let nome = "Márcio"
    let sobrenome = "Rodriguês Teodoro";

    return (
        <View id="View2" style={ estilos.cabecalho }>
            {/* Chamando a estilização atráves do grupo de estilos, chamando a constante e o objeto de estilo relevante, só sendo necessário abrir as chaves uma vez. */}

            <View id="View5" style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={ doutorImg } style={{ width: 50, height: 50 }}></Image>

                <Text style={{ paddingLeft: 15 }}>{nome}
                    <Text style={{ fontWeight: 'bold' }}> {sobrenome}</Text>
                </Text>
                {/* Utilizando um componente Text dentro de outro para colocar outro estilo, pra isso precisando separar o conteúdo da variável, para ter apenas o texto que você quer nesse estilo, nesse caso o sobrenome, com o texto em linha fica mais fácil. */}
            </View>

            <Image source={ carterinhaImg } style={{ width: 18, height: 24, resizeMode: 'contain' }}></Image>
        </View>
    )
}

export default Cabecalho;