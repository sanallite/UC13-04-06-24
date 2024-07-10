/* Aula 14 - Meu desafio usando Picker */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { style } from './StyleSheet';
import Conteudo from './components/Conteudo'

function App() {
  let titulo = "Departamentos do Mercado";
  let logo = require('./assets/mercado.png');

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={ logo } resizeMode='contain' style={ style.logo } ></Image>
        <Text>{titulo}</Text>
      </View>

      <Conteudo />
    </View>
  )
}

export default App;
