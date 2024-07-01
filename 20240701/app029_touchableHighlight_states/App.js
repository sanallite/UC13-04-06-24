/* Aula 11 - Touchable Highlight, States */

import React from 'react';
import { View } from 'react-native';
import { styles } from './estilos';
import Corpo from './componentes/Corpo';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <View style={ styles.fundo }>
      <Cabecalho />

      <Corpo />

      <Rodape />
    </View>
  )
}

export default App;