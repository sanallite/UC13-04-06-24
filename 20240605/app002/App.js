/* Aula 1 */

import React from 'react';
// Importando a biblioteca geral do React.

import {View, Text} from 'react-native';
// Importanto os componentes view e text para o projeto.

function App() {
  return(
    <View> {/* Esse é o potinho/container */}
      <Text>Agora eu sei fazer!</Text> {/* Esse é o componente responsável por escrever na tela. */}
    </View>
  );
  //Método que mostra os componentes na tela.
}
// Essa á função príncipal do app.

export default App;
// Exporta o arquivo, sem essa linha o app não aparece na tela.