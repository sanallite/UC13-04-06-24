/* Aula 19 - Navegação entre telas - Stack Navigation Parte 2, Tela 3 */

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ZeroTres() {
    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.viewBotoes }>
                <Pressable style={ estilo.botoes }>
                    <Text style={ estilo.textoBotoes }>Voltar</Text>
                </Pressable>

                <Pressable style={ estilo.botoes }>
                    <Text style={ estilo.textoBotoes }>Início</Text>
                </Pressable>
            </View>

            <View style={ estilo.viewTitulo }>
                <Text style={{ fontSize: '1.2rem', color: 'white' }}>Tela Três</Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#ef4a97'
    },

    viewBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1rem'
    },

    botoes: {
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        padding: '1rem',
        width: '30%'
    },

    textoBotoes: {
        textAlign: 'center',
        color: '#ef4a97'
    },

    viewTitulo: {
        flex: 1,
        padding: '1rem'
    }
})