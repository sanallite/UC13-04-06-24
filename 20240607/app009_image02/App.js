/* Aula 5 - Image, Desafio 4 - 08 de junho de 2024 */

import React from 'react';
/* Importanto a biblioteca geral do React */

import {View, Text, Image} from 'react-native';
/* Importando apenas os componentes que serão usados. */

function App() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Image source={ require( './img/pessoas.avif' )} style={{ width: 200, height: 200 }}></Image>
      </View>

      <View style={{ flex: 0.7, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: '2em', fontWeight: 'bold', textAlign: 'justify', width: '80%', marginBottom: '0.5em' }}>Bem vindo(a) ao Aplicativo Barilife!</Text>

        <Text style={{ width: '80%', textAlign: 'justify', color: 'gray' }}>
        A Sociedade Brasileira de Cirurgia Bariatrica e Metabolica (SBCBM) desenvolveu o aplicativo pensando em você, paciente bariatrico. É um aplicativo inovador e gratuito.
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ borderColor: '#2560be', borderWidth: 1, borderRadius: 50, padding: '1em', fontSize: '1.2em', width: '30%', textAlign: 'center', marginRight: '0.5em', color: '#2560be' }}>
          Pular
        </Text>

        <Text style={{ backgroundColor: '#2560be', color: 'white', borderWidth: 1, borderRadius: 50, borderColor: '#2560be', fontSize: '1.2em', width: '30%', textAlign: 'center', padding: '1em' }}>
          Pŕoximo
        </Text>
      </View>

      <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
        <View style={{ width: 16, height: 16, borderRadius: 50, backgroundColor: '#2560be', margin: '0.4em' }}></View>
        <View style={{ width: 16, height: 16, borderRadius: 50, backgroundColor: 'lightgray', margin: '0.4em' }}></View>
        <View style={{ width: 16, height: 16, borderRadius: 50, backgroundColor: 'lightgray', margin: '0.4em' }}></View>
      </View>
    </View>
  )
}

export default App;