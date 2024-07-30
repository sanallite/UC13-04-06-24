/* Aula 19 - Navegação entre telas, Stack Navigation - Folha de estilos */

import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    fundoPrincipal: { 
        flex: 1,
        backgroundColor: 'lightgray'
    },

    fundoTelas: {
        flex: 1,
        backgroundColor: 'darkred'
    },

    telas: {
        flex: 1,
        margin: '1rem',
        borderTopLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        backgroundColor: 'white',
    },
    
    cabecalho: {
        alignItems: 'center'
    },

    corpo: {
        flex: 1,
        alignItems: 'center'
    },

    pressionaveis: {
        borderColor: 'darkred',
        padding: '0.625rem',
        borderRadius: '1rem',
        borderWidth: 2,
        marginVertical: '0.625rem',
        width: '40%',
        alignItems: 'center'
    },

    textoPress: {
        color: 'darkred'
    },

    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '1rem',
        borderColor: 'lightgray',
        borderTopWidth: 2
    },

    cabecalhoTelas: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'darkred',
        borderBottomWidth: 2,
        padding: '1rem'
    },

    capa_pagina: {
        width: 150,
        height: 100
    },

    nome_festa: {
        color: 'darkred',
        fontWeight: 'bold'
    },

    textoCuriosidades: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },

    conteudo_telas: {
        padding: '1rem'
    },

    titulos: {
        color: 'darkred',
        fontSize: '1.3rem'
    },

    textos_telas: {
        marginVertical: '0.625rem'
    },

    images: {
        width: 200,
        height: 150
    },

    rodapeTelas: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '1rem',
        borderColor: 'darkred',
        borderTopWidth: 2
    },
})