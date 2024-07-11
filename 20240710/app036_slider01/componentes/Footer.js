/* Aula 15 - Componentes de Interface, Slider - Rodapé do app */

import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../StyleSheet/estilos';

/* Exportando a função diretamente na criação */
export default function Footer() {
    return (
        <View style={ estilos.footer }>
            <Text>Márcio Rodriguês Teodoro</Text>
            <Text>2024</Text>
        </View>   
    )
}