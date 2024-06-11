/* Aula 5 - Image, Desafio 5 */

import React from 'react';
/* Importanto a biblioteca geral do React */

import {View, Text, Image} from 'react-native';
/* Importando apenas os componentes que serão usados. */

function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20 }}>
        <Image source={ require( './img/chevron-left.svg' ) } style={{ width: 50, height: 50, color: 'darkblue' }}></Image>
        <Text style={{ fontWeight: 'bold', fontSize: '1.4em', color: 'darkblue', marginLeft: 20 }}>Carteirinha Digital</Text>
      </View>

      <View style={{ backgroundColor: 'lightblue', flex: 10, flexDirection: 'column', margin: 20, borderRadius: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', width: 100, height: 20, borderRadius: 50, marginTop: 20 }}></View>

          <Image source={ require( './img/Sams-Club-Logo.png' ) } style={{ width: 150, height: 90, marginTop: 20 }}></Image>

          <Image source={ require('./img/117714634_p0.png') } style={{ width: 160, height: 160, borderRadius: 100, marginTop: 20 }}></Image>

          <Text style={{ fontWeight: 'bold', fontSize: '1.2em', marginTop: 20 }}>Amelia Watson</Text>
          <Text style={{ color: 'gray' }}>10555100843711276</Text>

          <Image source={ require('./img/QR Code 19334207-fcac-4ade-a0a6-386d18b43aec.png') } style={{ width: 200, height: 200, marginTop: 20, borderRadius: 20 }}></Image>
        </View>

        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
          <Image source={ require('./img/reply-fill.svg') } style={{ width: 30, height: 30, marginRight: 20 }}></Image>
        </View>
      </View>  
    </View>
    
  )
}

export default App;