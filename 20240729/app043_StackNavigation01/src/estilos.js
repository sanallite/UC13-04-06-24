/* Aula 19 - Navegação entre telas, Stack Navigation - Folha de estilos */

import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    fundo: { 
        flex: 1,
        backgroundColor: 'lightgray'
    },

    tela_principal: {
        flex: 1,
        margin: '1rem',
        borderTopLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        backgroundColor: 'white',
    },
    
    cabecalho: {
        alignItems: 'center'
    },

    corpo: {
        flex: 1,
        alignItems: 'center'
    },

    pressionaveis: {
        borderColor: 'darkorange',
        padding: '0.625rem',
        borderRadius: '1rem',
        borderWidth: 2,
        marginVertical: '0.625rem',
        width: '40%',
        alignItems: 'center'
    },

    textoPress: {
        color: 'darkorange'
    },

    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '1rem',
        borderColor: 'lightgray',
        borderTopWidth: 2
    }
})