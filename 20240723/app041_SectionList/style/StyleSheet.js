/* Aula 18 - Componente SectionList, Folha de estilos */

import { StyleSheet } from 'react-native';
export const style = StyleSheet.create({
    background: {
        flex: 1
    },

    header: {
        alignItems: 'center'
    },

    logo: {
        width: 300,
        height: 200,
        margin: '1rem',
        borderRadius: 10
    },

    tituloHome: {
        fontSize: '1.4rem',
        fontWeight: 'bold'
    },

    subtitulo: {
        fontSize: '1.1rem'
    },

    lista: {
        flex: 1,
    },

    cabSecao: {
        backgroundColor: 'darkblue',
        marginTop: '1rem',
        padding: '0.5rem',
        alignItems: 'center'
    },

    tituloSecao: {
        color: 'white'
    },

    dadosLista: {
        backgroundColor: 'lightblue'
    },

    itemLista: {
        paddingHorizontal: '1rem',
        paddingVertical: '0.5rem',
        borderBottomWidth: 1,
        borderColor: 'darkblue'
    },

    footer: {
        backgroundColor: 'black',
        margin: '0.5rem',
        borderRadius: 10,
        alignItems: 'center',
        padding: '1rem'
    },

    nome_data: {
        color: 'white',
        fontSize: '1rem'
    }
})
