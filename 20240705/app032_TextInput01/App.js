/* Aula 13 - Componentes de Interface, TextInput */

import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

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

  fonte: {
    fontFamily: 'Times New Roman'
  },

  corpo: {
    paddingHorizontal: '1rem'
  },

  caixaTexto: {
    borderWidth: 1,
    width: '50%',
    marginVertical: '1rem',
    backgroundColor: 'white'
  }
});

function App() {
  let titulo = "Aula 13";
  let subtitulo = "Componente de entrada de texto";
  let instrucao = "Digite seu nome:";

  const [ saudacao, setSaudacao ] = useState('');

  function capturaNome(texto_digitado) {
    if ( texto_digitado.length > 0 ) {
      setSaudacao('Olá ' + texto_digitado + '\nSeja bem vindo!');
    }
    /* Verificação de tamanho, não de valor. Se o texto digitado não estiver vazio, o valor da variável de estado saudação será alterado, caso contrário será alterado para voltar ao padrão, por exemplo se o usuário apagar tudo que foi digitado. */

    else {
      setSaudacao('');
    }
  }

  return (
    <View style={ estilos.fundo }>
      <View style={ estilos.titulo }>
        <Text style={[ estilos.fonte , { fontSize: '1.2rem', fontWeight: 'bold' }]}>{titulo}</Text>

        <Text style={[ estilos.fonte, { fontSize: '1.1rem' } ]}>{subtitulo}</Text>
      </View>

      <View style={ estilos.corpo }>
        <Text style={[ estilos.fonte ]}>{instrucao}</Text>

        <TextInput style={ estilos.caixaTexto } onChangeText={ capturaNome }></TextInput>
        {/* A cada tecla pressionada é acionada a função que captura nome, através do método onChangeText */}

        <Text style={[ estilos.fonte ]}>{saudacao}</Text>
      </View>
    </View>
  )
}

export default App;