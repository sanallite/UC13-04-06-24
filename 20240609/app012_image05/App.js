/* Aula 5 - Image, Desafio 7 */

import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#0059b3', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={ require('./img/wave.avif') } style={{ width: 130, height: 130, borderRadius: 100, borderColor: 'white', borderWidth: 10 }}></Image>
      </View>

      <View style={{ flex: 3, padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/house.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Início</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/chat-dots.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Comunidades</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/journal-text.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Lições De Casa</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/camera.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Fotos</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/calendar3.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Calendário</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/question-circle.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Enquetes</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/journal-medical.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Formulários</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/journal-check.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Autorizações</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/journal-bookmark.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Agendas</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/car-front-fill.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Chegando</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/pen.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Matrículas</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/person-vcard.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Atendimento</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/hdd-network.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Serviços Úteis</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ require('./img/chat-square-dots.svg') } style={{ width: 25, height: 25, margin: 10 }}></Image>

          <Text style={{ marginLeft: 10 }}>Chat Online</Text>
        </View>

      </View>
    </View>
  )
}

export default App;