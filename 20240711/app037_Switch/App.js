/* Aula 16 - Componentes de Interface, Switch */

import React, { useState } from 'react';
import { Switch, View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
/* O componente Switch é nativo, então não precisa ser instalado manualmente */

/* Exportando a função logo na criação */
export default function App() {
    const [ estiloAtual, setEstilo ] = useState(estilo2);
    /* Usando uma variável de estado para definir a folha de estilo atual. */

    const [ ligado, ligar ] = useState(false);
    /* Definindo o valor inical do Switch como falso, ou seja, desligado */

    const [ textoBotao, setTexto ] = useState("Usando a folha de estilo padrão, a segunda.");

    function mudarEstilo() {
        if ( ligado ) {
            setEstilo(estilo2);
            ligar(false);
            setTexto("Usando a segunda folha de estilo");
        }
        /* Se o valor do Switch for true, ou seja, estiver ligado, o estilo atual, o estado do switch e o texto exibido serão alterados para que a segunda folha de estilo seja usada, caso contrário será usada a primeira folha e o estado do Switch será verdadeiro/ligado */

        else {
            setEstilo(estilo1);
            ligar(true);
            setTexto("Usando a primeira folha de estilo")
        }
    }

    return (
        <View style={ estiloAtual.viewDeFundo }>
        /* Amanhã */
            <Text>Componente Switch</Text>

            <TouchableHighlight style={ estiloAtual.botao } onPress={ mudarEstilo }>
                <Text style={ estiloAtual.textoBotao }>Mudar Estilo</Text>
            </TouchableHighlight>

            <Switch value={ ligado } onValueChange={ mudarEstilo } />
            /* O valor do Switch foi definido na variável de estado e a cada mudança de valor será chamada a função que muda o estilo */

            <Text>{textoBotao}</Text>
        </View>
    )
}

const estilo2 = StyleSheet.create({
    viewDeFundo: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },

    botao: {
        padding: 30,
        backgroundColor: 'black'
    },

    textoBotao: {
        color: 'white',
        fontSize: 30
    }
})

const estilo1 = StyleSheet.create({
    viewDeFundo: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },

    botao: {
        padding: 20,
        backgroundColor: 'white'
    },

    textoBotao: {
        color: 'lightgreen',
        fontSize: 20
    }
})
