/* Aula 12 - Meu desafio usando states */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function App() {
  let talentos = [
    { nome: "Gawr Gura", imagem: '' },
    { nome: "Ninomae Ina'nis", imagem: '' },
  ];
  /* Criando objetos dentro do vetor para armazenar as personagens */

  return (
    <View>
      <View>
        <Text>Hololive English</Text>
        <Text>Qual talento você ganhou?</Text>
      </View>

      <View>
        <Image></Image>
        <Text>Nome</Text>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Jogar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;