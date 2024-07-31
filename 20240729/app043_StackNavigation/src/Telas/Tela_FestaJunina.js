/* Aula 19 - Navegação entre telas, Stack Navigation */

import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../estilos';

export default function Tela_FestaJunina() {
  let intro = "Festas Juninas no Brasil, também conhecidas como festas de São João Batista, são as comemorações anuais brasileiras adaptadas do solstícios de verão europeu que ocorre no meio do inverno no hemisfério sul.";

  let origens = "A origem da festa junina é pagã, ou seja, é contrária à doutrina cristã, porque as festas que deram origem às festas juninas homenageavam os deuses da natureza e da fertilidade e pediam fartura nas safras, pois era nessa altura que começava o período da colheita de cereais.";

  let sao_joao = "As festas do mês de junho fazem referência a três santos: Santo Antônio, São João e São Pedro. A festa de São João, no dia 24, comemora o nascimento de João Batista. Já o dia de Santo Antônio, 13 de junho, e o dia de São Pedro, 29, marcam a data da morte dos dois santos.";

  let no_brasil = "Os colonizadores portugueses trouxeram a tradição das festas juninas para o Brasil no século XVI. No Brasil, essas festas passaram por um processo de adaptação, incorporando elementos das culturas indígenas, africanas e de outras influências regionais.";

  let quadrilha = "Uma das principais danças das festas juninas, tem origem nas danças de salão francesas do século XVIII, chamadas 'quadrille'. No Brasil, a dança foi adaptada e ganhou características próprias, incluindo os comandos em português e a narrativa que simula um casamento na roça.";

  let comidas = "Muitas comidas típicas das festas juninas, como a pamonha, o milho cozido, a canjica e o bolo de milho, têm influências indígenas, refletindo o uso de ingredientes locais como milho e mandioca. Além disso, o coco e o amendoim, usados em pratos como pé de moleque e cocada, também têm influências africanas.";

  let vestimentas = "As roupas típicas das festas juninas, como vestidos de chita para as mulheres e camisas xadrez para os homens, são inspiradas nas vestimentas dos caipiras, ou habitantes das zonas rurais. Essa vestimenta representa uma homenagem ao modo de vida rural, que é fortemente celebrado durante as festas.";

  return (
      <View style={ estilos.fundoTelas }>
        <View style={ estilos.telas }>
          <View style={ estilos.cabecalhoTelas }>
            <Image source={ require('../junina.jpg') } style={ estilos.capa_pagina } resizeMode='contain'></Image>

            <View>
              <Text style={ estilos.nome_festa }>Festa Junina</Text>
              <Text style={ estilos.textoCuriosidades }>Curiosidades</Text>
            </View>
          </View>
        
          <ScrollView style={ estilos.conteudo_telas }>
            <Text style={ estilos.titulos }>Introdução:</Text>

            <Text style={ estilos.textos_telas }>{intro}</Text>

            <Text style={ estilos.titulos }>Origens</Text>

            <Text style={ estilos.textos_telas }>{origens}</Text>

            <Text style={[ estilos.titulos, { marginBottom: '0.625rem' } ]}>Qual é o Significado da Festa de São João?</Text>

            <Image source={ require('../balao.jpg') } style={ estilos.images }></Image>

            <Text style={ estilos.textos_telas }>{sao_joao}</Text>

            <Text style={ estilos.titulos }>Introdução no Brasil</Text>

            <Text style={ estilos.textos_telas }>{no_brasil}</Text>

            <Text style={ estilos.titulos }>A Quadrilha</Text>
            
            <Text style={ estilos.textos_telas }>{quadrilha}</Text>

            <Text style={ estilos.titulos }>Comidas Típicas de Origem Indígena e Africana</Text>
            
            <Text style={ estilos.textos_telas }>{comidas}</Text>

            <Text style={ estilos.titulos }>Vestimentas Caipiras</Text>
            
            <Text style={ estilos.textos_telas }>{vestimentas}</Text>
          </ScrollView>

          <View style={ estilos.rodapeTelas }>
            <Text>Márcio Teodoro</Text>
            <Text>Julho de 2024</Text>
          </View>
        </View>
      </View>
  )
}