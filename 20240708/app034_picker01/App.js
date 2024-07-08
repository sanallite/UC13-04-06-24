/* Aula 14 - Componentes de Interface, Picker */

import React, { useState } from 'react';
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';
/* Importando os componentes que eu criei */

import { Picker } from '@react-native-picker/picker';
/* Importando o componente que foi instalado manualmente */

import { View, Text, Image, TextInput, Pressable, StyleSheet } from 'react-native';
/* Importando todos os componentes nativos que vamos usar, antes da componentização */

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

export { estilos };
/* Exportando a folha de estilo, mesmo estando no arquivo principal do app. */

function App() {
  /* let logo1 = require('./assets/logo1.png');
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
  Conteúdo que foi para os componentes */

  return (
    <View style={{ flex: 1, backgroundColor: corPrimaria }}>
      <Cabecalho />

      <Conteudo />

      <Rodape />
    </View>
  )
}

export default App;