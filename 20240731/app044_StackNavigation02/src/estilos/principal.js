/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio 2, Folha de estilos da tela príncipal */

import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: 'white'
    },

    cabecalho: {
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: '0.5rem'
    },

    opcoes: {
        alignItems: 'center'
    },

    pressionaveis: {
        width: '40%',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        padding: '0.5rem',
        margin: '0.5rem'
    }
})