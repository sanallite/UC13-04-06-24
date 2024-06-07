/* Aula 4 - Componente text */

import React from 'react';
// Importando a biblioteca geral do React.

import {View, Text} from 'react-native';
// Importando apenas os componentes view e text do React, que são os que estão sendo usados, portanto fazer a importação é necessário.

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'green', padding: 30 }}>
      <Text style={{ backgroundColor: 'black', color: 'lightblue', fontSize: '2em', textAlign: 'center', marginBottom: 50 }}>
        Onde posso chegar
      </Text>

      <Text style={{ fontSize: 30}}>
          <Text style={{ fontFamily: 'Bernard MT Condensed' }}>Vivo numa casa boa{'\n'}</Text>
          <Text style={{ fontStyle: 'italic' }}>Onde nada está a toa{'\n'}</Text>
          <Text style={{ fontSize: '0.8em' }}>Quando deito na cama{'\n'}</Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Começo a sonhar{'\n'}</Text>
          <Text>Logo após acordar{'\n'}</Text>
          <Text>A vida vou continuar{'\n'}</Text>
          <Text>Aí o tempo passa{'\n'}</Text>
          <Text>Quando isso parece impossível{'\n'}</Text>
          <Text>Mas no mundo dos sonhos{'\n'}</Text>
          <Text>Dos verdadeiros sonhos{'\n'}</Text>
          <Text>Tudo é possível{'\n'}</Text>
          <Text>E aí a vida continua{'\n'}</Text>
          <Text>Enquanto tudo...{'\n'}</Text>
          <Text>Tudo muda.{'\n'}</Text>
      </Text>

      <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 30, textAlign: 'center', marginTop: 50, fontFamily: 'Brush Script MT', padding: '0.5em', fontSize: 36 }}>
        Márcio Teodoro, 2010
      </Text>
    </View>
  )
}

export default App;
// Exporta o arquivo, sem essa linha o app não aparece na tela.