/* Aula 6 - Variáveis */
import React from 'react';
import {View, Text} from 'react-native';

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

      <View style={{ height: '20%' }}>
        <Text style={{ fontSize: '1.5em', fontFamily: 'Times', textAlign: 'center' }}>{Titulo}</Text>
      </View>
      
      <View style={{ height: '70%' }}>
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