/* Aula 11 - Componentes de interface, Touchable Highlight */

import React from 'react';
import { View } from 'react-native';
import { estilo } from './estilo';
import Cabecalho from './componentes/Cabecalho';
import Corpo from './componentes/Corpo';

function App() {
  return (
    <View style={ estilo.fundo }>
      <Cabecalho />

      <Corpo />
    </View>
  )
}

export default App;