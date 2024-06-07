/* Aula 4 - Componente Text, desafio */

import React from 'react';
// Importando a biblioteca geral do React.

import {View, Text} from 'react-native';
// Importando apenas os componentes view e text do React, que são os que estão sendo usados, portanto fazer a importação é necessário.

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'antiquewhite', flexDirection: 'column', padding: 16 }}>
      <View style={{ height: '10%', backgroundColor: 'white', marginBottom: 16, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 10 }}>
        <Text style={{ color: 'darkgreen', fontSize: '2em', fontWeight: 'bold' }}>Zerói Manutenção</Text>
      </View>

      <View style={{ height: '35%', backgroundColor: 'coral', padding: 10, flexDirection: 'column' }}>
        <View style={{ borderColor: 'darkgreen', borderWidth: 3, flex: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 20 }}>
          <Text style={{ fontFamily: 'Times New Roman', color: 'white', fontSize: '1.5em' }}>Por que confiar na Zerói</Text>
        </View>

        <View style={{ borderColor: 'white', borderWidth: 3, flex: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Solicite uma visita</Text>
        </View>

        <View style={{ borderColor: 'white', borderWidth: 3, flex: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontStyle: 'italic' }}>Contato</Text>
        </View>

        <View style={{ borderColor: 'white', borderWidth: 3, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <Text style={{ color: 'coral', fontWeight: '500', fontSize: '1.6em' }}>Cadastre-se</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'black', marginTop: 16, padding: 16 }}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'justify' }}>O nome da empresa (ZÉrói) representa um desafio ao uso intensivo de termos em inglês e imagens copiadas da internet para dar um aspecto “clean” aos sites e às empresas que representam.{'\n\n'}ZÉ é o José, brasileiro, de estatura mediana ... Também tem o Chico, o Naldo, o Beto (isso é do meu tempo de “piá”). São esses os apelidos de brasileiros que “fazem”. O Zé + o 0 (zero) constroem o ZÉrÓi, que representa todos os super-heróis brasileiros, sem capa nem superpoderes (zero super-poderes, “é na unha!”), que “só” trabalham.{'\n\n'}Esses ZÉrÓis da nossa equipe são os que realizam, com conhecimento, treinamento, dedicação e muita experiência, o que você mais deseja: um serviço bem feito. Nossa satisfação plena.</Text>
      </View>
    </View>
  )
}

export default App;
// Exporta o arquivo, sem essa linha o app não aparece na tela.