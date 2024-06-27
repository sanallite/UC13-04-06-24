/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 - Folha de estilos */

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
    },

    cabecalho: {
        flexDirection: 'row', 
        padding: '1em', 
        alignItems: 'center'
    },

    iconeVoltar: {
        width: 20,
        height: 20,
        marginLeft: 10
    },

    tituloPagina: {
        color: "darkblue",
        fontWeight: 'bold',
        fontSize: '1.05em'
    },

    viewPesquisa: {
        flexDirection: 'row',
        backgroundColor: "#e6e6e6", 
        margin: 10, 
        padding: '0.6em', 
        borderRadius: 15
    },

    rodape: {
        flexDirection: 'row',
        padding: 10
    },

    botoesRodape: {
        flex: 1,
        alignItems: 'center'
    },

    nomeBotoesRP: {
        color: "lightgray"
    }
})

export { estilos }