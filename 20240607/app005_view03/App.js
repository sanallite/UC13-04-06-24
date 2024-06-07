/* Aula 3 - Continuação do componente view, propriedades flex, justify content */

import React from 'react';
// Importando a biblioteca geral do React.

import {View, Text} from 'react-native';
// Importando apenas os componentes view e text do React, que são os que estão sendo usados, portanto fazer a importação é necessário.

function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'row', padding: 50, backgroundColor: 'orange', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <View style={{ width: 70, height: 70, backgroundColor: 'black' }}>
      </View>

      <View style={{ width: 70, height: 70, backgroundColor: 'white' }}>
      </View>

      <View style={{ width: 70, height: 70, backgroundColor: 'red' }}>
      </View>
    </View>
  )
}

export default App;
// Exporta o arquivo, sem essa linha o app não aparece na tela.