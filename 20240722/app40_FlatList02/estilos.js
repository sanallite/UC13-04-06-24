/* Aula 17 - Componente FlatList, Desafio 2 - Folha de estilos */

import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#d15070'
    },

    titulo: {
        marginHorizontal: '0.625rem',
        alignItems: 'center',
        padding: '0.625rem'
    },

    textoTitulo: {
        fontSize: '1.4rem',
        fontFamily: 'Ink Free Regular',
        color: 'white'
    },

    itemLista: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderRadius: '0.625rem',
        marginHorizontal: '0.625rem',
        marginVertical: '0.3125rem',
        padding: '0.625rem'
    },

    nome_capa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '0.3125rem'
    },

    nomeMusica: {
        fontSize: '1.3rem',
    },

    capaAlbum: {
        width: 100,
        height: 100
    },

    nomeAlbum: {
        fontSize: '1rem'
    },

    ano_clipe: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    detalhe: {
        marginHorizontal: '0.625rem',
        alignItems: 'center',
        padding: '0.3125rem',
    }
})