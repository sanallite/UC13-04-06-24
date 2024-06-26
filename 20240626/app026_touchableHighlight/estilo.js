/* Aula 11 - Componentes de interface, Touchable Highlight - Folha de estilos. */

import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
        padding: 30
    },

    cabecalho: {
        backgroundColor: 'darkred',
        alignItems: 'center',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        padding: 20
    },

    imagem: {
        width: 250,
        height: 170,
    },

    corpo: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    tituloCorpo: {
        fontSize: '1.4em',
        color: 'darkred'
    },

    botao: {
        padding: '1em',
        backgroundColor: 'darkred',
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 1
    }

})

export { estilo };