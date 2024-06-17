/* Aula 7 - Estruturas Condicionais, Desafio 2 */

import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  let pagina1 = "Turismo";
  let pagina2 = "Programação";
  let pagina = pagina2;
  const corTercearia = "darkgreen";
  const fundoPrincipal = "rgb(242, 242, 242)";
  const corPrimaria = "#0052cc";
  const corSecundaria = "white";
  
  const terceariaAlt = "darkred";

  /* let destaque1, destaque2, destaque3;
  let detalhesD1, detalhesD2, detalhesD3;
  let fotoD1, fotoD2, fotoD3; 
  Teste a dinâmicidade disso depois. */

  let excursao1 = "São Bento do Sul | Campo Alegre - SC";
  let excursao2 = "Circuito Italiano | Gruta do Bacaetava | Colombro - PR";
  let excursao3 = "Campos do Jordão | Aparecida - SP";

  let detalhesEX1, detalhesEX2, detalhesEX3;
  detalhesEX1 = "Dia 08 de junho de 2024 \nSaída de Curitiba \nA partir de 3x R$ 62,00/pessoa.";
  /* Como o texto está fora da estrutura do react, no return, não é necessário usar as chaves para chamar um código javascript, como o \n */

  detalhesEX2 = "Dia 09 de junho de 2024 \nSaída de Curitiba \nA partir de 2x R$ 67,50/pessoa.";

  detalhesEX3 = "De 12 a 16 de junho de 2024";

  let atividade1 = "Oficina Critica em Artes Visuais";
  let atividade2 = "Show com Os Gonzagas";
  let atividade3 = "Paraná Junino no Bosque São Cristóvão, em Curitiba";

  let detalhesAT1, detalhesAT2, detalhesAT3;
  detalhesAT1 = "Hoje | 14h às 16h \nSesc Paço da Liberdade";

  detalhesAT2 = "Hoje | 17h \nBosque São Cristóvão";

  detalhesAT3 = "Hoje | 12h às 19h \nBosque São Cristóvão";

  let fotoEX1 = require('./img/saobentodosul.jpg');
  let fotoEX2 = require('./img/memorial.jpg');
  let fotoEX3 = require('./img/campos.webp');

  let fotoAT1 = require('./img/oficina.jpg');
  let fotoAT2 = require('./img/gonzagas.jpg');
  let fotoAT3 = require('./img/junino.jpg');

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
        <View style={{ backgroundColor: corPrimaria, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ iconeVoltar } style={{ width: 20, height: 20, marginLeft: 20 }}></Image>

          <Text style={{ backgroundColor: corPrimaria, color: corSecundaria, fontSize: '1.6em', margin: '0.5em', marginLeft: 20 }}>
            {pagina1}
          </Text>
        </View>

        <View style={{ backgroundColor: corTercearia, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1em' }}>
          <Text style={{ color: corSecundaria, fontSize: '1.6em' }}>
            {pagina1}
          </Text>

          <Image source={ iconeMenu } style={{ height: 20, width: 20, marginRight: 20 }}></Image>
        </View>

        <View style={{ flexDirection: 'row', padding: '0.6em', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
          <Text style={{ color: corPrimaria, fontSize: '1.3em' }}>
            Excursões e Passeios
          </Text>

          <View style={{ padding: 1, borderColor: corPrimaria, borderWidth: 1, borderRadius: 20, width: 60, alignItems: 'center' }}>
            <Image source={ iconeFiltro } style={{ width: 20, height: 20, margin: '0.2em' }}></Image>
          </View>
          
        </View>

        <View style={{ backgroundColor: 'darkgray', alignItems: 'center', marginHorizontal: 10, borderRadius: 20 }}>
          <Text style={{ padding: '0.5em' }}>69 Excursões Encontradas</Text>
        </View>

        <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: 10, marginTop: 10, marginBottom: 5, backgroundColor: corSecundaria, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
          <View style={{ flexDirection: 'column' }}>
            <Image source={ fotoEX1 } style={{ width: 100, height: 100, marginHorizontal: 16, marginTop: 16 }}></Image>

            <Text style={{ backgroundColor: corTercearia, padding: '0.3em', color: corSecundaria, textAlign: 'center', width: 100, marginHorizontal: 16 }}>
              Confirmado
            </Text>
          </View>

          <View style={{ flexDirection: 'column', flex: 1, padding: 10 }}>
            <Text style={{ fontSize: '1.3em', color: corTercearia, fontWeight: 'bold', marginBottom: 10 }}>
              {excursao1}
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: '1.02em' }}>
              {detalhesEX1}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, backgroundColor: corSecundaria }}>
          <View>
            <Image source={ fotoEX2 } style={{ width: 100, height: 100, marginHorizontal: 16, marginTop: 16 }}></Image>

            <Text style={{ backgroundColor: corTercearia, padding: '0.3em', color: corSecundaria, textAlign: 'center', width: 100, marginHorizontal: 16 }}>
              Confirmado
            </Text>
          </View>

          <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontSize: '1.3em', color: corTercearia, fontWeight: 'bold', marginBottom: 10 }}>
              {excursao2}
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: '1.02em' }}>
              {detalhesEX2}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, backgroundColor: corSecundaria, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
          <View>
            <Image source={ fotoEX3 } style={{ width: 100, height: 100, marginHorizontal: 16, marginTop: 16 }}></Image>

            <Text style={{ backgroundColor: corTercearia, padding: '0.3em', color: corSecundaria, textAlign: 'center', width: 100, marginHorizontal: 16 }}>
              Confirmado
            </Text>
          </View>

          <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontSize: '1.3em', color: corTercearia, fontWeight: 'bold', marginBottom: 10 }}>
              {excursao3}
            </Text>

            <Text style={{ fontSize: '1.02em', fontWeight: 'bold' }}>
              {detalhesEX3}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: corPrimaria, flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao1 } style={{ width: 20, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Início</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao2 } style={{ width: 12.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Credencial Sesc</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao3 } style={{ width: 12.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Pagamentos</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao4 } style={{ width: 17.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Refeições</Text>
          </View>
        </View>
      </View>
    )

  else {
    return (
      <View style={{ backgroundColor: fundoPrincipal, flex: 1 }}>
        <View style={{ backgroundColor: corPrimaria, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={ iconeVoltar } style={{ width: 20, height: 20, marginLeft: 20 }}></Image>

          <Text style={{ backgroundColor: corPrimaria, color: corSecundaria, fontSize: '1.6em', margin: '0.5em', marginLeft: 20 }}>
            {pagina2}
          </Text>
        </View>

        {/* <View style={{ backgroundColor: corTercearia, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1em' }}>
          <Text style={{ color: corSecundaria, fontSize: '1.6em' }}>
            {pagina2}
          </Text>

          <Image source={ iconeMenu } style={{ height: 20, width: 20, marginRight: 20 }}></Image>
        </View> */}

        <View style={{ flexDirection: 'row', padding: '0.6em', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
          <Text style={{ color: corPrimaria, fontSize: '1.3em' }}>
            Programação
          </Text>

          <View style={{ padding: 1, borderColor: corPrimaria, borderWidth: 1, borderRadius: 20, width: 60, alignItems: 'center' }}>
            <Image source={ iconeFiltro } style={{ width: 20, height: 20, margin: '0.2em' }}></Image>
          </View>
          
        </View>

        <View style={{ backgroundColor: 'darkgray', alignItems: 'center', marginHorizontal: 10, borderRadius: 20 }}>
          <Text style={{ padding: '0.5em' }}>96 Atividades Encontradas</Text>
        </View>

        <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: 10, marginTop: 10, marginBottom: 5, backgroundColor: corSecundaria, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
          <View style={{ flexDirection: 'column' }}>
            <Image source={ fotoAT1 } style={{ width: 100, height: 100, marginHorizontal: 16, marginTop: 16 }}></Image>

            {/* <Text style={{ backgroundColor: terceariaAlt, padding: '0.3em', color: corSecundaria, textAlign: 'center', width: 100, marginHorizontal: 16 }}>
              Confirmado
            </Text> */}
          </View>

          <View style={{ flexDirection: 'column', flex: 1, padding: 10 }}>
            <Text style={{ color: terceariaAlt, marginBottom: 10 }}>
              Artes Visuais - Gratuito
            </Text>

            <Text style={{ fontSize: '1.3em', color: terceariaAlt, fontWeight: 'bold', marginBottom: 10 }}>
              {atividade1}
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: '1.02em' }}>
              {detalhesAT1}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, backgroundColor: corSecundaria }}>
          <View>
            <Image source={ fotoAT2 } style={{ width: 100, height: 100, marginHorizontal: 16, marginTop: 16 }}></Image>

            {/* <Text style={{ backgroundColor: terceariaAlt, padding: '0.3em', color: corSecundaria, textAlign: 'center', width: 100, marginHorizontal: 16 }}>
              Confirmado
            </Text> */}
          </View>

          <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ color: terceariaAlt, marginBottom: 10 }}>
              Música - Gratuito
            </Text>

            <Text style={{ fontSize: '1.3em', color: terceariaAlt, fontWeight: 'bold', marginBottom: 10 }}>
              {atividade2}
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: '1.02em' }}>
              {detalhesAT2}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, backgroundColor: corSecundaria, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
          <View>
            <Image source={ fotoAT3 } style={{ width: 100, height: 100, marginHorizontal: 16, marginTop: 16 }}></Image>

            {/* <Text style={{ backgroundColor: terceariaAlt, padding: '0.3em', color: corSecundaria, textAlign: 'center', width: 100, marginHorizontal: 16 }}>
              Confirmado
            </Text> */}
          </View>

          <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ color: terceariaAlt, marginBottom: 10 }}>
              Eventos - Gratuito
            </Text>

            <Text style={{ fontSize: '1.3em', color: terceariaAlt, fontWeight: 'bold', marginBottom: 10 }}>
              {atividade3}
            </Text>

            <Text style={{ fontSize: '1.02em', fontWeight: 'bold' }}>
              {detalhesAT3}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: corPrimaria, flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao1 } style={{ width: 20, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Início</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao2 } style={{ width: 12.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Credencial Sesc</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao3 } style={{ width: 12.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Pagamentos</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={ iconeBotao4 } style={{ width: 17.5, height: 18.5 }}></Image>
            <Text style={{ color: corSecundaria, textAlign: 'center' }}>Refeições</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default App;