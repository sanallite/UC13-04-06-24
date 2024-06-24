/* Aula 10, Componentes dentro de componentes, Desafio 6 */

import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        paddingTop: 25,
    },

    cabecalho: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    corpo: {
        flex: 0.75
    },

    destaque: {
        flex: 1,
        backgroundColor: 'powderblue',
        margin: 10,
        justifyContent: 'center',
        padding: '1em'
    }, 

    destaquePlus: {
        flex: 1,
        backgroundColor: 'yellow',
        margin: 10,
        justifyContent: 'center',
        padding: '1em'
    }, 

    conteudo: {
        flex: 1,
        backgroundColor: 'green',
        margin: 10,
        justifyContent: 'center',
        padding: '1em'
    },

    rodape: {
        flex: 0.1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
  
    botoesRodape: {
        width: 50,
        height: 60,
        resizeMode: 'contain'
    },
})

export { estilos }