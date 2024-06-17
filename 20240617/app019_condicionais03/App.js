/* Aula 7 - Estruturas Condicionais, Desafio 03 */

import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  const corPrimaria = "#43b941";
  const corSecundaria = "lightgray";
  const corTercearia = "darkblue";
  const corQuaternaria = "#e6e6e6";

  let pagina1 = "Serviços";
  let pagina2 = "Locais de Atendimento";
  let pagina = pagina1;

  let botao1 = "Notificações";
  let botao2 = "Início";
  let botao3 = "Configurações";

  let iconeB1, iconeB2, iconeB3;
  iconeB1 = require('./img/bell-regular.svg');
  iconeB2 = require('./img/house-solid.svg');
  iconeB3 = require('./img/gear-solid.svg');

  let iconeVoltar, iconePesquisar, iconeMenu, iconeLink, iconePesquisar2;
  iconeVoltar = require('./img/arrow-left-solid.svg');
  iconePesquisar = require('./img/pesquisar-claro.svg');

  let alimentacao, alvaras, assistencia, capacitacao, cidadania, concursos, cultura, direitos, educacao, emergencias, esporte, habitacao;
  alimentacao = require('./img/alimentacao.png');
  alvaras = require('./img/alvaras.png');
  assistencia = require('./img/assistencia.png');
  capacitacao = require('./img/capacitacao.png');
  cidadania = require('./img/cidadania.png');
  concursos = require('./img/concursos.png');
  cultura = require('./img/cultura.png');
  direitos = require('./img/aviacao.png');
  educacao = require('./img/educacao.png');
  emergencias = require('./img/emergencias.png');
  esporte = require('./img/esportes.png');
  habitacao = require('./img/habitacao.png');

  if ( pagina == "Serviços" ) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', padding: '1em', alignItems: 'center' }}>
          <Image source={ iconeVoltar } style={{ width: 20, height: 20, marginLeft: 10 }}></Image>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: corTercearia, fontWeight: 'bold', fontSize: '1.05em' }}>
              {pagina1}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: corQuaternaria, margin: 10, padding: '0.6em', borderRadius: 15 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: corSecundaria }}>Pesquisar Serviços</Text>
          </View>

          <Image source={ iconePesquisar } style={{ width: 20, height: 20 }}></Image>
        </View>

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            <View style={{ width: 125, height: 125, borderRadius: 20, justifyContent: 'center', alignItems: 'center', boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold', color: corTercearia }}>
                Alimentação
              </Text>

              <Image source={ alimentacao } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Alvarás, Certidões e Licitações
              </Text>

              <Image source={ alvaras } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Assistência Social
              </Text>

              <Image source={ assistencia } style={{ width: 70, height: 70 }}></Image>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Capacitação
              </Text>

              <Image source={ capacitacao } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Cidadania
              </Text>

              <Image source={ cidadania } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Concursos Públicos
              </Text>

              <Image source={ concursos } style={{ width: 70, height: 70 }}></Image>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Cultura
              </Text>

              <Image source={ cultura } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Direitos Humanos
              </Text>

              <Image source={ direitos } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Educação
              </Text>

              <Image source={ educacao } style={{ width: 70, height: 70 }}></Image>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Emergências
              </Text>

              <Image source={ emergencias } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Esporte e Lazer
              </Text>

              <Image source={ esporte } style={{ width: 70, height: 70 }}></Image>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: 125, height: 125, borderRadius: 20, boxShadow: '-5px 5px 15px -5px rgba(0,0,0,0.25)' }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                Habitação e Moradia
              </Text>

              <Image source={ habitacao } style={{ width: 70, height: 70 }}></Image>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={ iconeB1 } style={{ width: 25, height: 30 }}></Image>

            <Text style={{ color: corSecundaria }}>Notificações</Text>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={ iconeB2 } style={{ width: 35, height: 30 }}></Image>

            <Text style={{ color: corPrimaria }}>Início</Text>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={ iconeB3 } style={{ width: 30, height: 30 }}></Image>

            <Text style={{ color: corSecundaria }}>Configurações</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default App;
