/* Aula 18 - Componente SectionList, Desafio 2 - Folha de estilos */

import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
    viewFundo: {
        flex: 1,
        backgroundColor: 'lightblue',
    },

    titulo: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        textAlign: 'center',
    },

    subtitulo: {
        color: 'brown',
        textAlign: 'center'
    },

    tituloSecao: {
        backgroundColor: 'green',
        paddingHorizontal: '1rem',
        paddingVertical: '0.5rem'
    },

    nomeContinente: {
        color: 'white'
    },

    paises: {
        marginHorizontal: '1rem',
        marginVertical: '0.5rem',
        borderBottomColor: 'green',
        borderBottomWidth: 1
    }
})