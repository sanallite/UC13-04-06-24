/* Aula 6 - Variáveis, Desafio 1 */
import React from 'react';
import {View, Text, Image} from 'react-native';

function App() {
  let dia, nome;
  /* Definindo as variáveis antes de atribuí-las um valor, o que não é possível com const */

  dia = 11;
  nome = "Márcio Teodoro";

  const Titulo = "VARÍAVEIS EM REACT NATIVE";
  const Paragrafo = "Variáveis são espaços de memória do computador destinados a \
    dados que são manipulados e alterados durante a execução de um \
    algoritmo. Logo, para que o resultado seja o esperado, é preciso \
    considerar o tipo de dado que será armazenado e também definir o \
    nome das variáveis.";
  const rodape1 = "Márcio Teodoro";
  const rodape2 = "Junho de 2024";

  return (
    <View style={{ flex: 1, backgroundColor: 'skyblue', paddingVertical: 30, paddingHorizontal: 20  }}>
      {/* <View>
        <Text>Olá {nome}, hoje é dia {dia}</Text>
      </View> */}
      {/* Exemplo Inicial */}

      <View>
        <Text style={{ fontSize: '1.5em', fontFamily: 'Times', textAlign: 'center' }}>{Titulo}</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
        <View style={{ width: 120, height: 80, borderColor: 'red', borderWidth: 3, backgroundColor: 'darkred' }}></View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image source={ require('./img/thousand.webp') } style={{ width: 120, height: 160, borderColor: 'white', borderWidth: 2, borderRadius: '50%' }}></Image>

        <Image source={ require('./img/rise.png') } style={{ width: 120, height: 160, borderColor: 'white', borderWidth: 2, borderRadius: '50%' }}></Image>
      </View>
      
      <View style={{ flex: 1, marginVertical: 20 }}>
        <Text style={{ fontSize: 20, textAlign: 'justify' }}>{Paragrafo}</Text>
      </View>

      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{rodape1}</Text>
        <Text style={{ fontSize: 20 }}>{rodape2}</Text>
      </View>
    </View>
  )
}

export default App;