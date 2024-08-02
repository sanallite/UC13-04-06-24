/* Aula 19 - Navegação entre telas - Stack Navigation Parte 2, Tela Principal */

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
/* Importando o componente que permite disparar eventos de navegação entre as telas */

export default function Principal() {
    const Nav = useNavigation();
    /* Instânciando o componente de navegação numa constante */

    const mudarTela = (caminho) => {
        if ( caminho === 'voltar' ) {
            Nav.goBack();
        }

        else if ( caminho === 'avancar' ) {
            Nav.navigate('Um')
        }
    }

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.principal }>
                <Text style={{ fontSize: '1.2rem' }}>Tela Principal</Text>
            </View>

            <View style={ estilo.viewBotao }> 
                <Pressable style={ estilo.botao } onPress={ () => mudarTela('avancar') }>
                    <Text style={{ color: 'white' }}>Clique Aqui</Text>
                </Pressable>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    principal: {
        width: '90%',
        height: '50%',
        backgroundColor: '#adfb77',
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewBotao: {
        margin: '1rem'
    },

    botao: {
        borderColor: '#adfb77',
        backgroundColor: 'green',
        borderWidth: 2,
        padding: '1rem'
    }
})