/* Aula 19 - Navegação entre telas, Stack Navigation */

import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function Tela_Carnaval() {
  let intro = "O Carnaval brasileiro é muito mais do que uma simples festa; é uma expressão cultural que impulsiona a economia e o turismo do país. Com seu poder de atrair turistas de todo o mundo e gerar empregos e receita, o carnaval se tornou uma peça fundamental no cenário econômico brasileiro.";

  let destaque = "Mas engana-se quem pensa que o carnaval é uma festa que teve origem no Brasil.";

  let origens = "Para dar íncio as controvérsias, encontramos relatos de especialistas que associam os ritos carnavalescos a dez mil anos antes de Cristo. Conforme alguns estudiosos, a grande celebração era relacionada aos louvores dos antigos para boas colheitas agrárias.";

  let origens_egito = [ "No Egito Antigo, havia festividades em honra aos deuses, como o Festival de Osíris, que era celebrado com procissões, danças e cantos. Essas celebrações podem ter influenciado os ritos festivos das civilizações mediterrâneas posteriores.","O culto a Ísis, uma das deusas mais importantes do Egito Antigo, foi particularmente influente. Com a expansão do Império Romano, o culto a Ísis se espalhou pela Europa, trazendo consigo elementos de festividades e procissões que eventualmente se integrariam às tradições carnavalescas." ];

  let influencia_crista = "Com a ascensão do cristianismo, muitas dessas festividades pagãs foram adaptadas para se alinhar aos calendários cristãos. O Carnaval passou a ser a última grande celebração antes do período de abstinência da Quaresma, que precede a Páscoa. Assim, o Carnaval tornou-se uma época de excessos permitidos antes da purificação espiritual.";

  let evolucao_medieval = "Durante a Idade Média, o Carnaval evoluiu para incluir desfiles, máscaras e fantasias, além de elementos de sátira social e política. As cidades europeias, como Veneza e Colônia, tornaram-se famosas por suas elaboradas celebrações carnavalescas.";

  let chegada_americas = "Com a colonização, os europeus levaram as tradições do Carnaval para as Américas, onde se misturaram com as culturas indígenas e africanas, resultando em celebrações vibrantes e diversificadas, como o Carnaval do Rio de Janeiro, que é hoje uma das festas mais famosas do mundo.";

  let atualmente = "A partir do século 19, o Carnaval no Brasil começou a tomar a forma que conhecemos hoje, evoluindo de uma série de festejos informais para uma celebração organizada e grandiosa. No início, o Entrudo, uma festa popular de origem portuguesa, era caracterizado por brincadeiras às vezes violentas, como jogar água e farinha nas pessoas. Com o tempo, influências europeias, especialmente dos bailes de máscaras venezianos, começaram a moldar as celebrações, introduzindo desfiles e fantasias mais elaboradas. Na virada do século 20, surgiram os primeiros ranchos carnavalescos e cordões, grupos organizados que desfilavam pelas ruas com música, dança e fantasias. Na década de 1920, escolas de samba começaram a ser fundadas, como a Deixa Falar, pioneira do gênero. Com a oficialização dos desfiles das escolas de samba na década de 1930, o Carnaval do Rio de Janeiro ganhou destaque internacional, consolidando-se como o epicentro da festa. O desenvolvimento da televisão e da mídia, a partir da segunda metade do século 20, ajudou a popularizar ainda mais o evento, transformando-o em um espetáculo global. Hoje, o Carnaval brasileiro é uma celebração multicultural e multimídia, que atrai milhões de turistas de todo o mundo, além de ser um importante evento econômico e cultural para o país, refletindo a rica diversidade do povo brasileiro.";

  return (
      <View>
        <View>
          <Text>Carnaval</Text>
          <Text>Curiosidades</Text>
          <Image></Image>
        </View>

        <ScrollView>
          <Text>Introdução:</Text>
          <Text>{intro}</Text>
          <Text>{destaque}</Text>
          <Text>Origens</Text>
          <Text>{origens}</Text>
          <Text>Curiosidades: Egito</Text>
          <Image></Image>
          <Text>{origens_egito[0]}</Text>
          <Text>{origens_egito[1]}</Text>
        </ScrollView>
        
        <View>

        </View>
      </View>

      
  )
}