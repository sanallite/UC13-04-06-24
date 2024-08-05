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
            /* Método que retorna pra tela anterior na pilha, que foi definida no arquivo App, mas sem uso nessa tela. */
        }

        else if ( caminho === 'avancar' ) {
            Nav.navigate('Um');
            /* Método que navega pela tela especificada pelo nome */
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
                {/* Cada vez que o componente for pressionado, uma função será chamada para mudar a tela exibida de acordo com o parâmetro enviado */}
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