/* Aula 19 - Navegação entre telas, Stack Navigation */

import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../estilos';

export default function Tela_Halloween() {
  let intro = "O significado de 'Halloween' está relacionado ao sentido da própria data em sí. De acordo com Tupa Guerra, o nome teria vindo da expressão 'All Hallows Eve' - que, em tradução direta, significa 'A véspera de todas as almas'. Isso porque a data antecede o Dia de Todos os Santos.";

  let origens = "Os historiadores apontam que a provável origem do Halloween tenha sido um festival praticado pelos Celtas chamado Samhain. Esse festival era uma das comemorações mais importantes do calendário celta e era realizado como um marco do fim do verão.";

  let bruxas = "Bruxas sempre aparecem como símbolo do Halloween. Pesquisas mostram que, antigamente, nos Estados Unidos, algumas mulheres com aparência estranha e assustadora eram chamadas de bruxas. Essas personagens faziam festas para homenagear o diabo.";

  let jack_lantern = "As tradicionais abóboras esculpidas, conhecidas como jack-o'-lanterns, têm origem em uma lenda irlandesa sobre Jack Miserável, um homem que enganou o diabo e foi condenado a vagar pelo mundo com uma lanterna feita de nabo. Os imigrantes irlandeses trouxeram essa tradição para os Estados Unidos, onde encontraram a abóbora, mais fácil de esculpir, e a adotaram.";

  let docuras = "A prática de 'doces ou travessuras' deriva de antigas tradições europeias. Durante o Samhain, os celtas deixavam comida e bebida para os espíritos errantes. Mais tarde, na Idade Média, as pessoas pobres iam de casa em casa no Dia de Todos os Santos, oferecendo orações pelos mortos em troca de comida, uma prática chamada 'souling'.";

  let trajes = "Vestir fantasias durante o Halloween remonta às antigas celebrações de Samhain, onde as pessoas usavam máscaras e trajes para afastar os espíritos malignos. A ideia era que, ao se disfarçar, as pessoas poderiam evitar ser reconhecidas pelos fantasmas que vagavam pela terra.";

  return (
      <View style={ estilos.fundoTelas }>
        <View style={ estilos.telas }>
          <View style={ estilos.cabecalhoTelas }>
            <Image source={ require('../aboboras.jpg') } style={ estilos.capa_pagina } resizeMode='contain'></Image>

            <View>
              <Text style={ estilos.nome_festa }>Halloween / Dia das Bruxas</Text>
              <Text style={ estilos.textoCuriosidades }>Curiosidades</Text>
            </View>
          </View>

          <ScrollView style={ estilos.conteudo_telas }>
            <Text style={ estilos.titulos }>Introdução:</Text>

            <Text style={ estilos.textos_telas }>{intro}</Text>

            <Text style={ estilos.titulos }>Origens</Text>

            <Image source={ require('../halloween.png') } style={ estilos.images } resizeMode='contain'></Image>

            <Text style={ estilos.textos_telas }>{origens}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={ require('../bruja.jpg') } style={ estilos.images } resizeMode='contain'></Image>

              <View>
                <Text style={ estilos.titulos }>Curiosidades:</Text>
                <Text style={ estilos.titulos }>Bruxas</Text>
              </View>
            </View>

            <Text style={ estilos.textos_telas }>{bruxas}</Text>

            <Text style={ estilos.titulos }>Jack-o'-Lanterns</Text>

            <Text style={ estilos.textos_telas }>{jack_lantern}</Text>

            <Text style={ estilos.titulos }>Doçuras ou Travessuras Trick or Treat</Text>

            <Text style={ estilos.textos_telas }>{docuras}</Text>

            <Text style={ estilos.titulos }>Trajes de Halloween</Text>

            <Text style={ estilos.textos_telas }>{trajes}</Text>
          </ScrollView>
          
          <View style={ estilos.rodapeTelas }>
            <Text>Márcio Teodoro</Text>
            <Text>Julho de 2024</Text>
          </View>
        </View>
      </View>
  )
}