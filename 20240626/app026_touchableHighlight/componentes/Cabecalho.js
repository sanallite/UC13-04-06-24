/* Aula 11 - Componentes de interface, Touchable Highlight - Componente Cabeçalho */

import React from 'react';
import { View, Image, Text } from 'react-native';
import { estilo } from '../estilo'

function Cabecalho() {
    let imagem = "https://static.wixstatic.com/media/2cab5f_411e5e052b2943e5a6ba89c07e456553~mv2.png/v1/fill/w_740,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2cab5f_411e5e052b2943e5a6ba89c07e456553~mv2.png";
    let titulo = "Desenvolvimento Mobile";

    return (
        <View style={ estilo.cabecalho }>
            <Image source={{ uri: imagem }} style={ estilo.imagem }></Image>
            <Text style={{ color: 'white' }}>{titulo}</Text>
        </View>
    )
}

export default Cabecalho;