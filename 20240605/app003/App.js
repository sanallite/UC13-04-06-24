/* Aula 2 - Componente View e estilos */

import React from 'react';
// Importando a biblioteca geral do React.

import {View, Text} from 'react-native';
// Importando apenas os componentes view e text do React, que são os que estão sendo usados, portanto fazer a importação é necessário.

function App() {
  return (
    <View style={{backgroundColor:'orange', height: '100%', width: 400}}>
      <View style={{ backgroundColor: 'lightgreen', height: '20%' }}>
        <Text>Mais um componente</Text>
      </View>

      <View style={{backgroundColor:'gray', height: '50%', width: '25%'}}>
        <Text style={{color: 'orange'}}>Aula Dois</Text>

        <Text style={{backgroundColor: '#864200', color: 'white', fontSize: '1.2em', fontFamily: 'Times New Roman', textAlign: 'center'}}>
          Segundo texto, vamos fazer valer a pena!
        </Text>
      </View>
      
      <View style={{backgroundColor: 'green', height: '30%', width: '80%'}}>
        <Text style={{textAlign: 'right', paddingRight: '1em', height: 70}}>Terceiro texto.</Text>
        {/* Fazendo o estilo dos componentes. */}

        <View style={{ backgroundColor: 'beige', height: 210, width: '40%' }}> {/* Para definir uma cor apenas em pixels, não é necessário colocar as aspas. */}
          <Text>Esse texto está na segunda view</Text>
        </View>
      </View>
    </View>
    /* View é um componente multiuso que é principalmente usado como um container */
  )
}

export default App;