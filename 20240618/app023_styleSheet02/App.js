/* Aula 9 - Grupos de estilo, com stylesheet */

import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
/* Importando um novo componente que vai ser usado depois e também importando o componente de folhas de estilo. */

function App () {
  let img1 = require('./img/img1.png');
  let img2 = require('./img/img2.png');
  let botaoMidia = require('./img/img7.png');
  let botaoLocais = require('./img/img8.png');
  let botaoUsuario = require('./img/img9.png');
  let botaoAgenda = require('./img/img10.png');
  let botaoMenu = require('./img/img11.png');

  const estilos = StyleSheet.create({
    fundo: {
      backgroundColor: 'powderblue', flex: 1, paddingTop: 25, paddingHorizontal: 10, paddingBottom: 10
    },

    cabecalho: {
      flex: 0.15, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center', paddingHorizontal: 20
    },

    corpo: {
      flex: 0.75, backgroundColor: 'white'
    },

    viewsCorpo: {
      backgroundColor: 'blue', marginTop: 15, borderRadius: 20, height: 70, borderLeftWidth: 3, borderLeftColor: 'red'
    },

    rodape: {
      flex: 0.1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around'
    },

    botoesRodape: {
      width: 50, height: 60, resizeMode: 'contain'
    }
  });
  /* Criando uma constante pra criação da folha de estilo, ou grupo de estilo, chamando o componente e a função de criação, então criando um estilo e definindo os valores dos props ou atributos de estilo. */

  return (
    <View id="View1" style={ estilos.fundo }>
    {/* Componente View principal que servirá de como contâiner de todos os outros componentes da tela do app. */}

      <View id="View2" style={ estilos.cabecalho }>
        {/* Chamando a estilização atráves do grupo de estilos, chamando a constante e o objeto de estilo relevante, só sendo necessário abrir as chaves uma vez. */}

        <View id="View5" style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ img1 } style={{ width: 50, height: 50 }}></Image>

          <Text style={{ paddingLeft: 15 }}>Nome Sobrenome</Text>
        </View>

        <Image source={ img2 } style={{ width: 18, height: 24, resizeMode: 'contain' }}></Image>
      </View>
      
      <ScrollView id="View3" style={ estilos.corpo }>
        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>

        <View style={ estilos.viewsCorpo }>
          <Text>Conteúdo</Text>
        </View>
      </ScrollView>

      <View id="View4" style={ estilos.rodape }>
        <Image source={ botaoMidia } style={ estilos.botoesRodape }></Image>

        <Image source={ botaoLocais } style={ estilos.botoesRodape }></Image>

        <Image source={ botaoUsuario } style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: '50%' }}></Image>

        <Image source={ botaoAgenda } style={ estilos.botoesRodape }></Image>

        <Image source={ botaoMenu } style={ estilos.botoesRodape }></Image>
        {/* Não esqueça de chamar o grupo de estilo, nesse caso chamado de estilos. */}
      </View>
    </View>
  )
}

export default App;