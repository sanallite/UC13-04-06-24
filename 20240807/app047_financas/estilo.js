/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Folha de estilos */

import { StyleSheet } from 'react-native';
import RelatorioVendas from './conteudo/RelatorioVendas';

export const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
    },

    cabecalhoInicial: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: '1rem'
    },

    logo: {
        margin: '1rem',
        height: 200,
        width: 200
    },

    descInicial: {
        color: 'white',
        fontSize: '1.1rem',
        textAlign: 'center'
    },

    conteudoInicial: {
        padding: '1rem',
        flex: 1,
        backgroundColor: '#ffbf68',
        marginVertical: '1rem',
        marginHorizontal: '1rem',
        borderRadius: 20
    },

    pickerInicial: {
        padding: '0.625rem',
        borderColor: 'lightgray',
        borderRadius: 5,
        color: 'gray'
    },
    
    pressable: {
        backgroundColor: 'white',
        padding: '0.625rem',
        width: '45%',
        borderRadius: 5,
        alignItems: 'center',
        margin: '1rem',
        borderColor: 'lightgray',
        borderWidth: 1
    },

    relatorioVendas: {
        flex: 1,
        padding: '1rem'
    }
})