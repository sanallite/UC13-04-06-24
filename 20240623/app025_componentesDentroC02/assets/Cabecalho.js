/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos'

function Cabecalho() {
    let doutorImg = require('../img/img1.png');
    let carterinhaImg = require('../img/img2.png');

    return (
        <View id="View2" style={ estilos.cabecalho }>
            {/* Chamando a estilização atráves do grupo de estilos, chamando a constante e o objeto de estilo relevante, só sendo necessário abrir as chaves uma vez. */}

            <View id="View5" style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={ doutorImg } style={{ width: 50, height: 50 }}></Image>

            <Text style={{ paddingLeft: 15 }}>Nome Sobrenome</Text>
            </View>

            <Image source={ carterinhaImg } style={{ width: 18, height: 24, resizeMode: 'contain' }}></Image>
        </View>
    )
}

export default Cabecalho;