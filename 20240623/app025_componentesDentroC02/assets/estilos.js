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
        backgroundColor: 'rgb(204, 224, 255)',
        margin: 10,
        alignItems: 'center',
        /* justifyContent: 'space-between', */
        padding: '0.5em',
        flexDirection: 'row',
        borderRadius: 10
    },

    destaqueLadoEsquerdo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    destaqueLadoDireito: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    destaquePlus: {
        flex: 1,
        backgroundColor: 'rgb(255, 214, 153)',
        margin: 10,
        justifyContent: 'center',
        padding: '0.5em',
        flexDirection: 'row',
        borderRadius: 10
    },

    iconesDestaque: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginHorizontal: 10
    },

    conteudo: {
        flex: 1,
        backgroundColor: 'green',
        margin: 10,
        justifyContent: 'center',
        padding: '1em'
    },

    itemConteudo: {
        margin: 10,
        borderLeftColor: 'rgb(101, 230, 104)',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderLeftWidth: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        padding: '0.5em'
    },

    imagemItemConteudo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
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