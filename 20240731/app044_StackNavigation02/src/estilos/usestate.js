/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio 2, Folha de estilos da tela UseState */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'blueviolet'
    },

    viewTitle: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: '1rem',
        padding: '1rem'
    },

    title: {
        /* textAlign: 'center', */
        fontWeight: 'bold',
        fontSize: '1.1rem',
    },

    subtitulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: '1.2rem'
    },

    viewTalento: {
        flex: 0.38,
        alignItems: 'center',
        padding: '0 1.25rem 1.25rem 1.25rem',
    },

    textosDestaque: {
        color: 'white',
        fontSize: '1.25rem',
        marginBottom: '1.25rem'
    },

    imagemTalento: {
        marginVertical: '1.25rem',
        width: 300,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 10
    },

    viewBotao: {
        alignItems: 'center',
        marginBottom: '1.25rem'
    },

    botaoJogar: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: '0.5rem',
        width: '50%',
        alignItems: 'center'
    },

    viewDetalhes: {
        flex: 0.62,
        padding: '1.25rem',
        margin: '1.25rem',
        backgroundColor: 'orange',
        borderRadius: 10
    },

    lista: {
        color: 'white',
        marginBottom: '0.5rem',
        fontSize: '1.1rem'
    }
});

export { styles };