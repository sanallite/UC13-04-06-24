/* Aula 17 - Componente FlatList, Folha de estilo */

import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    fundo: {
        flex: 1
    },

    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '0.5rem',
    },

    logo: {
        width: 60,
        height: 60,
        // marginHorizontal: 5
    },

    areaTitulo: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    titulo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'darkgreen'
    },

    subtitulo: {
        backgroundColor: 'darkgreen',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        padding: '0.5rem',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        textAlign: 'center'
    },

    areaLista: {
        flex: 1,
        backgroundColor: 'lightgray',
        padding: '1rem',
    },

    textoLista: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    },

    itens: {
        marginVertical: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10
    },

    fotos: {
        width: 70,
        height: 70,
        borderRadius: 10
    },

    detalhes: {
        paddingHorizontal: '0.5rem',
        justifyContent: 'center'
    }
})
