/* Aula 11 - Componentes de interface, Touchable Highlight - Folha de estilos */

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        padding: 16
    },

    viewImagem: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    desenho: {
        width: 200,
        height: 200,
        resizeMode: 'contain' 
    },

    viewIntro: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    titulo: {
        fontWeight: 'bold',
        fontSize: '2em',
        marginBottom: '0.5em',
        textAlign: 'justify'
    },

    textoIntro: {
        textAlign: 'justify',
        color: 'gray',
    },

    viewPontos: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItens: 'center'
    },

    pontoCinza: {
        width: 16,
        height: 16,
        borderRadius: 50,
        backgroundColor: 'lightgray',
        margin: '0.4em'
    },

    pontoAzul: {
        width: 16,
        height: 16,
        borderRadius: 50,
        backgroundColor: '#2560be',
        margin: '0.4em'
    },

    viewBotoes: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 20
    },

    botoes: {
        borderWidth: 1, 
        borderRadius: 50, 
        borderColor: '#2560be', 
        fontSize: '1.2em', 
        width: '35%', 
        textAlign: 'center', 
        padding: '1em',
        marginHorizontal: '0.5em'
    },

    botaoDir: {
        backgroundColor: '#2560be'
    },

    textoBotoes: {
        textAlign: 'center', 
        fontWeight: 'bold'
    },
})

export { estilos };