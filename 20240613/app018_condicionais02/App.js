/* Aula 7 - Estruturas Condicionais, Desafio 2 */

import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  let pagina1 = "Turismo";
  let pagina2 = "Programação";
  let pagina = pagina1;

  const fundoPrincipal = "rgb(242, 242, 242)";
  const corPrimaria = "#0052cc";
  const corSecundaria = "white";
  const corTercearia = "darkgreen";
  const terceariaAlt = "red";

  /* let destaque1, destaque2, destaque3;
  let detalhesD1, detalhesD2, detalhesD3;
  let fotoD1, fotoD2, fotoD3; 
  Teste a dinâmicidade disso depois. */

  let excursao1 = "São Bento do Sul | Campo Alegre - SC";
  let excursao2 = "Circuito Italiano | Gruta do Bacaetava | Colombro - PR";
  let excursao3 = "Campos do Jordão | Aparecida - SP";

  let detalhesEX1, detalhesEX2, detalhesEX3;
  detalhesEX1 = "Dia 08 de junho de 2024 {\n} \
    Saída de Curitiba {\n} \
    A partir de 3x R$ 62,00/pessoa.";

  detalhesEX2 = "Dia 09 de junho de 2024 {\n} \
    Saída de Curitiba {\n} \
    A partir de 2x R$ 67,50/pessoa.";

  detalhesEX3 = "De 12 a 16 de junho de 2024";

  let atividade1 = "Oficina Critica em Artes Visuais";
  let atividade2 = "Show com Os Gonzagas";
  let atividade3 = "Paraná Junino no Bosque São Cristóvão, em Curitiba";

  let detalhesAT1, detalhesAT2, detalhesAT3;
  detalhesAT1 = "Hoje | 14h às 16h {\n} \
    Sesc Paço da Liberdade";

  detalhesAT2 = "Hoje | 17h {\n} \
    Bosque São Cristóvão";

  detalhesAT3 = "Hoje | 12h às 19h {\n} \
    Bosque São Cristóvão";

  let iconeVoltar, iconePesquisa, iconeBotao1, iconeBotao2, iconeBotao3, iconeBotao4;
  iconeVoltar = require('./img/arrow-left-solid.svg');
  iconePesquisa = require('./img/magnifying-glass-solid.svg');
  iconeMenu = require('./img/bars-solid.svg');
  iconeFiltro = require('./img/filter-solid.svg');
  iconeBotao1 = require('./img/house-solid.svg');
  iconeBotao2 = require('./img/image-portrait-solid.svg');
  iconeBotao3 = require('./img/dollar-sign-solid.svg');
  iconeBotao4 = require('./img/utensils-solid.svg');

  if ( pagina == "Turismo" )
    return (
      <View style={{ backgroundColor: fundoPrincipal, flex: 1 }}>
        <View style={{ backgroundColor: corPrimaria, flexDirection: 'row' }}>
          <Image source={ iconeVoltar } style={{ width: 20, height: 20 }}></Image>

          <Text style={{ backgroundColor: corPrimaria, color: corSecundaria }}>
            {pagina1}
          </Text>
        </View>

        <View style={{ backgroundColor: corTercearia, flexDirection: 'row' }}>
          <Text style={{ color: corSecundaria }}>
            {pagina1}
          </Text>

          <Image source={ iconeMenu } style={{ height: 20, width: 20 }}></Image>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: corPrimaria }}>
            {pagina1}
          </Text>

          <View style={{ padding: 1, borderColor: corPrimaria, borderWidth: 1, borderRadius: 20, width: '5%', alignItems: 'center' }}>
            <Image source={ iconeFiltro } style={{ width: 20, height: 20 }}></Image>
          </View>
          
        </View>
      </View>

      
    )

}

export default App;