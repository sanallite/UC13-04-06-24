/* Aula 9 - Grupos de estilo, sem stylesheet */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
/* Importando um novo componente que vai ser usado depois. */

function App () {
  let img1 = require('./img/img1.png');
  let img2 = require('./img/img2.png');

  return (
    <View id="View1" style={{ flex: 1, backgroundColor: 'powderblue', paddingTop: 20, paddingHorizontal: 10, paddingBottom: 10 }}>
    {/* Componente View principal que servirá de como contâiner de todos os outros componentes da tela do app. */}

      <View id="View2" style={{ flex: 0.15, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center', paddingHorizontal: 20 }}>

        <View id="View5" style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ img1 } style={{ width: 50, height: 50 }}></Image>

          <Text style={{ paddingLeft: 15 }}>Nome Sobrenome</Text>
        </View>

        <Image source={ img2 } style={{ width: 18, height: 24, resizeMode: 'contain' }}></Image>
      </View>
      
      <View id="View3" style={{ flex: 0.75, backgroundColor: 'green' }}>
        <Text>Conteúdo</Text>
      </View>

      <View id="View4" style={{ flex: 0.1, backgroundColor: 'black' }}>
        <Text style={{ color: 'white' }}>Rodapé</Text>
      </View>
    </View>
  )
}

export default App;