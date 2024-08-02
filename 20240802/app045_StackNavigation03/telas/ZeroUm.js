/* Aula 19 - Navegação entre telas - Stack Navigation Parte 2, Tela 1 */

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
/* Importando o componente que permite disparar eventos de navegação entre as telas */

export default function ZeroUm() {
    const Nav = useNavigation();
    /* Instânciando o componente de navegação numa constante */

    const mudarTela = (caminho) => {
        if ( caminho === 'voltar' ) {
            Nav.goBack();
            /* Método que retorna pra tela anterior na pilha, que foi definida no arquivo App */
        }

        else if ( caminho === 'avancar' ) {
            Nav.navigate('Dois')
            /* Método que navega pela tela especificada pelo nome */
        }
    }

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.titulo }>
                <Text style={{ fontSize: '1.2rem' }}>Tela Um</Text>
            </View>

            <View style={ estilo.linhaBotoes }>
                <Pressable style={ estilo.botoes } onPress={ () => mudarTela('voltar') }>
                    <Text style={ estilo.textoBotoes }>Voltar</Text>
                </Pressable>
                {/* Cada vez que o componente for pressionado, uma função será chamada para mudar a tela exibida de acordo com o parâmetro enviado */}

                <Pressable style={ estilo.botoes } onPress={ () => mudarTela('avancar') }>
                    <Text style={ estilo.textoBotoes }>Avançar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#fbec77'
    },

    titulo: {
        flex: 1,
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center'
    },

    linhaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '1rem'
    },

    botoes: {
        backgroundColor: '#152571',
        padding: '1rem',
        borderColor: 'lightblue',
        borderWidth: 2,
        width: '30%'
    },

    textoBotoes: {
        color: 'white',
        textAlign: 'center'
    }
})