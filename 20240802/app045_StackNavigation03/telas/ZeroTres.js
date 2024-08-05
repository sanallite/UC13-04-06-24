/* Aula 19 - Navegação entre telas - Stack Navigation Parte 2, Tela 3 */

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
/* Importando o componente que permite disparar eventos de navegação entre as telas */

export default function ZeroTres() {
    const Nav = useNavigation();
    /* Instânciando o componente de navegação numa constante, que pode ser nomeada livremente. */

    const mudarTela = (caminho) => {
        if ( caminho === 'voltar' ) {
            Nav.goBack();
            /* Método que retorna pra tela anterior na pilha, que foi definida no arquivo App */
        }

        else if ( caminho === 'avancar' ) {
            Nav.navigate('Três')
            /* Método que navega pela tela especificada pelo nome */
        }

        else {
            Nav.navigate('Principal');
            /* Se o caminho for qualquer outra coisa, ou não específicado, que é o caso nessa tela, será feita a navegação para a tela principal. */
        }
    }

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.viewBotoes }>
                <Pressable style={ estilo.botoes } onPress={ () => mudarTela('voltar') }>
                    <Text style={ estilo.textoBotoes }>Voltar</Text>
                </Pressable>

                <Pressable style={ estilo.botoes } onPress={ () => mudarTela() }>
                    <Text style={ estilo.textoBotoes }>Início</Text>
                </Pressable>
                {/* Cada vez que o componente for pressionado, uma função será chamada para mudar a tela exibida de acordo com o parâmetro enviado */}
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