/* Aula 10 - Componentes dentro de componentes, arquivo de estilo externo */

import { StyleSheet } from 'react-native';
/* Importando o componente de folhas de estilo. */

/* Criando a constante que contém os estilos */
const estilos = StyleSheet.create({
    /* Fundo da tela*/
    fundo: {
        flex: 1,
        backgroundColor: 'lightgray',
        marginTop: 25,
        padding: 10
    }, 

    /* View do cabeçalho */
    cabecalho: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flex: 0.35,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'column-reverse',
        backgroundColor: 'darkblue',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    cabImagem: {
        width: 300,
        height: 100,
        borderRadius: 25,
        /* resizeMode: 'center' */
    },

    cabTitulo: {
        color: 'white',
        fontSize: '2em'
    },

    cabSubTitulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.25em'
    },

    /* View do conteúdo princípal*/
    conteudo: {
        backgroundColor: 'white',
        flex: 0.65
    },

    /* View do rodapé */
    rodape: {
        flex: 0.15,
        flexDirection: 'row',
        backgroundColor: 'darkblue',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    rodAutor: {
        color: 'lightblue',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export { estilos };
/* Exportando a constante, para que possamos usá-los em outro arquivo. */