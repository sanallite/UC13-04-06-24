/* Aula 14 - Componentes de Interface, Picker - Componente do cabeçalho */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from '../App';

function Cabecalho() {
    let logo1 = require('../assets/logo1.png');
    let titulo = "Componente Picker";

    return (
        <View id="cabeçalho" style={ estilos.cabecalho }>
            <Image source = { logo1 } style={ estilos.logoCab } resizeMode='contain' ></Image>
            <Text style={ estilos.titulo }>{titulo}</Text>
        </View>
    )
}

export default Cabecalho;