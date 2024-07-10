/* Aula 14 - Meu desafio usando Picker - Folha de estilo */

import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    logo: {
        width: 150,
        height: 150
    },

    cabecalho: {
        backgroundColor: 'lightgray',
        alignItems: 'center',
        padding: '2rem'
    },

    titulo: {
        color: '#0067a0',
        fontWeight: 'bold',
        fontSize: '1.3rem'
    },

    conteudo: {
        margin: '1rem',
        padding: '1rem'
    },

    selecionador: {
        padding: '0.5rem',
        fontSize: '1.05rem'
    },

    departamento: {
        alignItems: 'center'
    },

    descricaoDept: {
        marginVertical: '1rem',
        textAlign: 'justify',
        fontSize: '1.05rem'
    }
});

export { style }