/* Aula 14 - Componentes de Interface, Picker */

import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
/* Importando o componente que foi instalado manualmente */

import { View, Text, Image, TextInput, Pressable, StyleSheet } from 'react-native';
/* Importando todos os componentes nativos que vamos usar */

let corPrimaria = "#1653f5";
let corSecundaria = "#f5b816";
/* Criando as variáveis das cores para serem usadas tanto na constante de estilo quando em linha na função do app */

const estilos = StyleSheet.create({
  cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1rem'
  },

  conteudo: {
    flex: 3,
    marginHorizontal: '1rem',
    backgroundColor: corSecundaria,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '1rem'
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  logoCab: {
    width: 100,
    height: 100,
    /* resizeMode: 'contain' Substituido por um props no componente */
  },

  titulo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.4rem',
    marginVertical: '0.5rem'
  },

  textoConteudo: {
    fontSize: '1.1rem',
    textAlign: 'justify',
    color: corPrimaria
  },

  textosInputPicker: {
    marginVertical: '0.5rem'
  },

  textInput: {
    borderWidth: 1,
    borderColor: corPrimaria,
    borderRadius: 5,
    padding: '0.5rem',
  },

  picker: {
    padding: '0.5rem',
    backgroundColor: corSecundaria
  },

  botao: {
    backgroundColor: corPrimaria,
    padding: '1rem',
    borderRadius: 25,
    width: '50%',
    marginVertical: '1rem'
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  logoAutor: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  logoRod: {
    width: 65,
    height: 65
  },

  autorData: {
    color: 'white',
    fontWeight: 'bold'
  }
})

function App() {
  let logo1 = require('./assets/logo1.png');
  let logo2 = require('./assets/logo2.png');

  let titulo = "Componente Picker";
  let textoConteudo = "No mundo do React Native, o componente Picker (selecionador) se refere a um componente que permite ao usuário escolher entre um conjunto de opções. \n\nVerifique o exemplo abaixo:";
  let textoInput = "Digite seu nome:";
  let textoPicker = "Escolha uma das opções abaixo:";
  let textoPress = "CLIQUE AQUI";
  let autor = "Márcio Teodoro";
  let data = "Julho de 2024";

  function verifica() {
    alert("Olá");
  }

  return (
    <View style={{ flex: 1, backgroundColor: corPrimaria }}>
      <View id="cabeçalho" style={ estilos.cabecalho }>
        <Image source = { logo1 } style={ estilos.logoCab } resizeMode='contain' ></Image>
        <Text style={ estilos.titulo }>{titulo}</Text>
      </View>

      <View id="conteudo" style={ estilos.conteudo }>
        <Text style={ estilos.textoConteudo }>{textoConteudo}</Text>

        <Text style={[ estilos.textoConteudo, estilos.textosInputPicker ]}>{textoInput}</Text>

        <TextInput style={ estilos.textInput }></TextInput>
        {/* Caixa de texto com as props padrão */}

        <Text style={[ estilos.textoConteudo, estilos.textosInputPicker ]}>{textoPicker}</Text>

        <Picker style={ estilos.picker }>
          <Picker.Item label = "Selecione..."  value = "Selecione" />
          <Picker.Item label = "Linguagem Java"  value = "Java" />
          <Picker.Item label = "Linguagem Javascript"  value = "JS" />
          <Picker.Item label = "Linguagem PHP"  value = "PHP" />
          {/* Itens de seleção, não esqueça de colocar com I maiúsculo. Todos os itens precisam ter um label e um valor, como os options do html */}
        </Picker>

        <View style={{ alignItems: 'center' }}>
          <Pressable onPress = {verifica} style={ estilos.botao }>
            <Text style={ estilos.textoBotao }>{textoPress}</Text>
          </Pressable>
          {/* Ou Touchable Highlight */}
        </View>
      </View>

      <View id="rodape" style={ estilos.rodape }>
        <View style={ estilos.logoAutor }>
          <Image source={ logo2 } style={ estilos.logoRod } resizeMode='contain'></Image>

          <Text style={[ estilos.autorData, { marginLeft: 10 } ]}>{autor}</Text>
        </View>

        <Text style={ estilos.autorData }>{data}</Text>
      </View>
    </View>
  )
}

export default App;