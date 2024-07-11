/* Aula 15 - Componentes de Interface, Slider - Folha de estilo */

import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    fundo: {
        flex: 1
    },

    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '1rem'
    },

    logo1: {
        width: 100,
        height: 100
    },
    
    titulo: {
        color: '#61dafb',
        fontWeight: 'bold',
        fontSize: '1.4rem',
        marginVertical: '0.5rem'
    },

    main: {
        flex: 3,
        marginHorizontal: '1rem',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: '1rem'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        padding: '0.5rem',
    },

    pressable: {
        backgroundColor: '#61dafb',
        padding: '1rem',
        borderRadius: 25,
        width: '50%',
        marginVertical: '1rem'
    },

    textoDestaque: {
        textAlign: 'justify',
        marginVertical: '0.5rem'
    },

    textosSliders: {
        marginVertical: '0.5rem'
    },

    footer: {
        flexDirection: 'row',
        backgroundColor: '#61dafb',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '1rem',
    }
})