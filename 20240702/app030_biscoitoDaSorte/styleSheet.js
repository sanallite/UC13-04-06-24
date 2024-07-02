/* Aula 12 - App Biscoito da Sorte, Folha de estilos */

import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    areaFundo: {
        flex: 1,
    },

    cabecalho: {
        backgroundColor: 'orange',
        alignItems: 'center',
        margin: 20,
        borderRadius: 20,
        padding: '1rem'
    },

    titulo: {
        color: 'white',
        fontWeight: 'bold'
    },

    viewBiscoito: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagemBiscoito: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },

    viewFrase: {
        flex: 0.3,
        padding: '2rem',
        margin: '2rem',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    fraseAleatoria: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textAlign: 'justify',
        margin: '1rem'
    },

    botao: {
        borderWidth: 2,
        borderRadius: 50,
        padding: '1rem',
        alignItems: 'center'
    },

    textoBotao: {
        fontWeight: 'bold'
    },

    iconeBotao: {
        width: 35,
        height: 35,
        marginRight: 10
    },
    
    dentroDoBotao: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export { estilos };