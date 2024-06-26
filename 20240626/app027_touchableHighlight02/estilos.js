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
        fontSize: '2em'
    }
})

export { estilos };