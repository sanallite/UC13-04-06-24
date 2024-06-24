/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { View } from 'react-native';
import { estilos } from './assets/estilos';
import Cabecalho from './assets/Cabecalho';
import Corpo from './assets/Corpo';
import Rodape from './assets/Rodape';

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