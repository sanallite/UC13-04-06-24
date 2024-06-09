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

      <View style={{ flex: 2, backgroundColor: 'teal', flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={{ width: '60%', color: 'white', fontSize: '1.3em', textAlign: 'justify' }}>O React Native pode estilizar o componente image de várias formas</Text>

        <Image source={ require('./img/img1.png') } style={{ borderRadius: 50, width: 100, height: 100, borderColor: 'darkgreen', borderWidth: 4 }} ></Image>
      </View>

      <View style={{ flex: 2, backgroundColor: 'lightgray', paddingVertical: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Image source={ require( './img/img2.png' )} style={{ width: 100, height: 100, borderTopLeftRadius: 50, borderColor: 'white', borderWidth: 2 }}></Image>

        <Text style={{ color: 'gray', fontSize: '0.9em', textAlign: 'justify', width: '60%' }}>
          - Alterando o formato e a cor da borda;{'\n'}
          - Alterando as dimensões e o posicionamento; {'\n'}
          - Alterando margens e espaçamento, etc...
        </Text>
      </View>

      <View style={{ flex: 4, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 10 }}>
        <Image source={{ uri: 'https://fbi.cults3d.com/uploaders/14330116/illustration-file/7f950bf4-a2c2-48b3-95dd-94c200f6457c/pic.png' }} style={{ width: 300, height: 250 }}></Image>
      </View>
    </View>
    
  )
}

export default App;
// Exporta o arquivo, sem essa linha o app não aparece na tela.