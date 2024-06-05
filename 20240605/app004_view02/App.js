import React from 'react';

import {View, Text} from 'react-native';

function App() {
  return (
    <View style={{ backgroundColor: 'limegreen', width: 350}}>
      <View style={{ backgroundColor: 'red', height: '10%', borderWidth: 5, marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <Text style={{ padding: 20 }}>Componente View</Text>
      </View>

      <View style={{ backgroundColor: 'yellow', height: '60%', borderWidth: 5, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ padding: 20, fontSize: '1.4em' }}>Conteúdo</Text>
      </View>

      <View style={{ backgroundColor: 'gray', borderWidth: 5, marginTop: 10, marginLeft: 20, marginRight: 20, borderBottomRightRadius: 20, borderBottomStartRadius: 20 }}>
        <Text style={{ paddingHorizontal: 10, paddingVertical: 5 }}>05 de Junho de 2024</Text>
        <Text style={{ paddingHorizontal: 10, paddingVertical: 5 }}>Márcio</Text>
      </View>
    </View>
  )
}

export default App;