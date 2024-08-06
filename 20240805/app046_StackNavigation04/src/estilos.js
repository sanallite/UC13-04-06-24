/* Aula 19 - Navegação entre telas, Stack Navigation - Desafios 4 e 5, Folha de estilos */

import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: 'white'
    },

    banner: {
        alignItems: 'center', 
    },

    imagem: {
        width: 240,
        height: 240
    },

    viewPrincipal: {     
        padding: '2rem'
    },

    titulo: {
        fontSize: '1.4rem',
        marginBottom: '1rem'
    },

    texto: {
        color: 'rgb(100,100,100)',
        textAlign: 'justify'
    },

    navegacao: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: '2rem'
    },

    pressionaveis: {
        padding: '1rem',
        borderRadius: 25,
        width: '40%',
        marginHorizontal: '0.625rem'
    },

    textoPress: {
        textAlign: 'center',
        fontWeight: 'bold'
    },

    pular: {
        backgroundColor: 'white',
        borderColor: 'rgb(48, 111, 225)',
        borderWidth: 1
    },

    proximo: {
        backgroundColor: 'rgb(48, 111, 225)',
    }
})