/* Aula 5 - Componente Imagem */

import React from 'react';
// Importando a biblioteca geral do React.

import {View, Text, Image} from 'react-native';
// Importando apenas os componentes view e text do React, que são os que estão sendo usados, portanto fazer a importação é necessário.

function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2.8, backgroundColor: 'lightblue', flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ color: 'blue', fontSize: '2em', margin: 16 }}>Componente Image</Text>

        <Image source={ require('./img/img1.png') } style={{ width: 200, height: 100, borderColor: 'black', borderWidth: 2 }}></Image>
      </View>

      <View style={{ flex: 2.5, backgroundColor: 'teal' }}>
        <Text>O React Native pode estilizar o componente image de várias formas</Text>

        <Image source={ require('./img/img1.png') } style={{ borderRadius: 50, width: 100, height: 100, borderColor: 'darkgreen', borderWidth: 4 }} ></Image>
      </View>

      <View style={{ flex: 2.8, backgroundColor: 'lightgray' }}>

      </View>

      <View style={{ flex: 4, backgroundColor: 'orange' }}>

      </View>
    </View>
    
  )
}

export default App;
// Exporta o arquivo, sem essa linha o app não aparece na tela.