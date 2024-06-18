/* Aula 8 - Estruturas de Repetição, For */

import React from 'react';
import {View, Text} from 'react-native';

function App() {
  let texto = "teste";
  let texto2 = "teste";

  for ( let i = 1; i < 10; i++ ) {
    texto = texto + i;
    texto2 = texto2 + 'i';
  }

  return (
    <View>
      <Text>
        Text
      </Text>

      <Text>
        {texto}
      </Text>

      <Text>
        {texto2}
        {/* Exibindo apenas o resultado final do loop. */}
      </Text>
    </View>
  )
}

export default App;