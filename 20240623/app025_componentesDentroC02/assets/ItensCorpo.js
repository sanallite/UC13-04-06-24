/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos';

function ItensCorpo(props) {
    let titulo = props.titulo;
    let estilo = props.style;
    let subtitulo = props.subtitulo;

    return (
        <View style={ estilo }>
            <Text>
                {titulo}
            </Text>

            <Text>
                {subtitulo}
            </Text>
        </View>
    )
}

export default ItensCorpo;