/* Aula 11 - Touchable Highlight, States - Folha de estilos */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: 'orange',
        flex: 1
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        color: 'white',
        fontSize: '1.4em',
    },

    body: {
        marginHorizontal: 16,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    pressable: {
        padding: '1em',
        borderRadius: 25
    },

    cliqueAqui: {
        fontSize: '1.1em',
        color: 'white',
        fontWeight: 'bold'
    },

    textosCorpo: {
        marginHorizontal: 16,
        textAlign: 'justify',
    },

    footer: {
        padding: '2em',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    autorData: {
        color: 'white'
    },
});

export { styles }