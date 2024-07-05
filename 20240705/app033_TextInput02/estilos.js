/* Aula 13 - Componentes de Interface, TextInput - Desafio 2 - Folha de estilos */

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    fundo: {
      backgroundColor: 'lightgray',
      flex: 1
    },
  
    titulo: {
      backgroundColor: 'gray',
      borderWidth: 1,
      margin: '1rem',
      padding: '1rem',
      alignItems: 'center'
    },

    textoTitulo: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },

    subtitulo: {
        fontSize: '1.1rem'
    },
  
    fonte: {
      fontFamily: 'Times New Roman'
    },
  
    corpo: {
      paddingHorizontal: '1rem'
    },
  
    caixaTexto: {
      borderWidth: 1,
      width: '50%',
      marginVertical: '0.5rem',
      backgroundColor: 'white',
      color: 'gray',
      padding: '0.5rem'
    }
  });

  export { estilos };