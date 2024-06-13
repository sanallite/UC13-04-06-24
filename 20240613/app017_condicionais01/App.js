/* Aula 7 - Estruturas Condicionais */

import React from 'react';
import {Text, View, Image} from 'react-native';

function App() {
  /* let valor = 2;
  let frase1 = "Frase da condição if";
  let frase2 = "Frase da condição else";
  let fraseFinal;

  if ( valor == 2 ) {
    fraseFinal = frase1;
  }

  else {
    fraseFinal = frase2;
  } Exemplo Inicial */

  let img1 = require('./img/img3.png');
  let img2 = "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F0e%2F48%2Fe0%2F0e48e03ef67749e2fa10cf99ae287008.jpg&sp=1718282755Tbfbebd99f93463d1690412ff415650305a254760564380ef81cb8b454ce35d68";
  let corFundo1 = "rgba(0,0,0, 0.2)";
  let corFundo2 = "orange";
  let corFundo3 = 'rgba(255, 0, 0, 0.2)';
  let corFundo4 = 'rgba(0, 255, 0, 0.2)';
  let corFundo5 = 'rgba(0, 0, 255, 0.2)';
  let corLetra1 = 'white';
  let tamanhoLetra1 = 40;

  let textoOpcao1 = "Primeira opção";
  let textoOpcao2 = "Segunda opção";
  let textoOpcao3 = "Sair";

  let opcao = 1 ;

  if ( opcao == 1 ) //Chamando o return sem precisar abrir e fechar chaves.
    return (
      <View style={{ flex: 1, backgroundColor: corFundo2 }}>
        <Image source={ img1 } style={{ width: '100%', height: '100%' }}></Image>

        <View style={{ backgroundColor: corFundo1, top: 100, left: 100, position: 'absolute', padding: 10, borderRadius: 30 }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
            {textoOpcao1}
          </Text>
        </View>

        <View style={{ backgroundColor: corFundo1, top: 300, left: 100, position: 'absolute', padding: 10, borderRadius: 30 }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
            {textoOpcao2}
          </Text>
        </View>

        <View style={{ backgroundColor: corFundo1, left: 130, top: 500, position: 'absolute', padding: 10, borderRadius: 30 }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
            {textoOpcao3}
          </Text>
        </View>
      </View>
    );
    // O conteúdo acima só será exibido se a variável opção tiver o valor 1, caso contrário será exibido o conteúdo abaixo.

  else {
    return (
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <Image source={{ uri: img2 }} style={{ width: '100%', height: '100%' }}></Image>
        {/* Para pegar uma imagem da internet é preciso abrir duas chaves no source e colocar o uri */}

        <View style={{ backgroundColor: corFundo3, left: 80, top: 100, position: 'absolute', padding: 10, borderRadius: 30 }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
            {textoOpcao1}
          </Text>
        </View>

        <View style={{ backgroundColor: corFundo4, left: 100, top: 300, position: 'absolute', padding: 10, borderRadius: 30 }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
            {textoOpcao2}
          </Text>
        </View>

        <View style={{ backgroundColor: corFundo5, left: 120, top: 550, position: 'absolute', padding: 10, borderRadius: 30 }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>
            {textoOpcao3}
          </Text>
        </View>
      </View>
    );
  }

  // return (
    {/* <View>
      <Text>{fraseFinal}</Text>
    </View> */}
  // Exemplo Inicial
}

export default App;