/* Aula 15 - Componentes de Interface, Slider - Cabeçalho do app*/

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from '../StyleSheet/estilos';

/* Exportando a função diretamente na criação */
export default function Header() {
    let logo1 = require('../StyleSheet/header_logo.svg');
    let texto = "Componente Slider";

    return (
        <View style={ estilos.header } >
            <Image source={ logo1 } resizeMode='contain' style={ estilos.logo1 }></Image>
            <Text style={ estilos.titulo } >{texto}</Text>
        </View>
    )
}