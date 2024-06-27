/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 */

import React from 'react';
import { View } from 'react-native';
import { estilos } from './estilos';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Rodape from './components/Rodape';

function App() {
  return (
    <View style={ estilos.fundo }>
      <Cabecalho />

      <Corpo />

      <Rodape />
    </View>
  )
}

export default App;