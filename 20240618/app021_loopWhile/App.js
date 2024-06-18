/* Aula 8 - Laços de Repetição, While */

import React from 'react';
import {View, Text} from 'react-native';

function App() {
  let cont = 0;
  /* Importante lembrar do valor inicial, para ter o número limite certo. */

  while ( cont < 10 ) {
    cont++;
  }

  return (
    <View>
      <Text>O laço de repetição while foi executado {cont} vezes.</Text>
    </View>
  )
}

export default App;