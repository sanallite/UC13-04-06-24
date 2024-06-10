/* Aula 5 - Image, Desafio 6 */

import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ backgroundColor: '#9999ff', alignItems: 'center', padding: 10 }}>
        <Image source={ require('./img/proxy-image.png') } style={{ width: 259, height: 54 }} ></Image>
      </View>

      <View style={{ backgroundColor: '#330099', height: '5%' }}>

      </View>

      <View style={{ flex: 1 , backgroundColor: 'white', flexDirection: 'column', alignItems: 'center' }}>
        <Image source={ require('./img/motoboy.png') } style={{ width: '12.5rem', height: '12.5rem', marginTop: 10 }}></Image>

        <Text style={{ width: '50%', fontSize: '1.6rem', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>
          Seja Independente, trabalhe menos e ganhe bem mais. Dê adeus ao seu chefe!
        </Text>
      </View>

      <View style={{ backgroundColor: '#330099', height: 64 }}>

      </View>
    </View>
  )
}

export default App;
