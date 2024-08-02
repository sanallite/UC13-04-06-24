/* Aula 19 - Navegação entre telas - Stack Navigation Parte 2, Tela 2 */

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
/* Importando o componente que permite disparar eventos de navegação entre as telas */

export default function ZeroDois() {
    const Nav = useNavigation();
    /* Instânciando o componente de navegação numa constante */

    const mudarTela = (caminho) => {
        if ( caminho === 'voltar' ) {
            Nav.goBack();
            /* Método que retorna pra tela anterior na pilha, que foi definida no arquivo App */
        }

        else if ( caminho === 'avancar' ) {
            Nav.navigate('Três')
            /* Método que navega pela tela especificada pelo nome */
        }
    }

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.viewTitulo }>
                <Text style={ estilo.titulo }>Tela Dois</Text>
            </View>

            <View style={ estilo.viewBotoes }>
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
        flexDirection: 'row-reverse'
    },

    viewTitulo: {
        flex: 1,
        alignItems: 'center',
    },

    titulo: {
        fontSize: '1rem',
        marginTop: '1rem'
    },

    viewBotoes: {
        flex: 1,
        alignItems: 'center'
    },

    botoes: {
        padding: '1rem',
        borderWidth: 2,
        width: '50%',
        marginTop: '1rem',
        backgroundColor: 'lightgray'
    },

    textoBotoes: {
        textAlign: 'center'
    }
})