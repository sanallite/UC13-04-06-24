/* Aula 11 - Componentes de interface, Touchable Highlight - Componente Corpo */

import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { estilo } from '../estilo';

function mostrarMsg() {
    alert("Olá Márcio");
}
/* Função que será executada quando o TouchableHighlight for pressionado, através do método onPress */

function Corpo() {
    let textoBotao = "Clique Aqui";
    let titulo = "Componente Touchable Highlight";

    return (
        <View style={ estilo.corpo }>
            <Text style={ estilo.tituloCorpo }>{titulo}</Text>

            <TouchableHighlight onPress={ mostrarMsg } style={ estilo.botao }>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{textoBotao}</Text>
            </TouchableHighlight>
            {/* Esse componente não precisa ser um botão, apenas foi estilizado para ser um */}
        </View>
    )
}

export default Corpo;