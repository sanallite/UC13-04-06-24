/* Aula 14 - Componentes de Interface, Picker - Componente de conteúdo */

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
/* Importando todos os componentes nativos que vamos usar */

import { Picker } from '@react-native-picker/picker';
/* Importando o componente que foi instalado manualmente */

import { estilos } from '../App';

function Conteudo() {
    const [ corFundoInput, setCorFundoI ] = useState('#f5b816');
    /* Variável de estado para a cor de fundo da caixa de texto */

    const [ corFundoPicker, setCorFundoP ] = useState('#f5b816');
    /* Variável de estado para a cor de fundo do selecionador */

    const [ itemSelecionado, setItemSelec ] = useState('Selecione');
    const [ nome, setNome ] = useState('');
    /* Variáveis de estado para armazenar o item selecionado e o nome */

    const alterarCor = (p) => {
        if ( p === "input" ) {
            setCorFundoI('white');
        }

        else if ( p === "picker" ) {
            setCorFundoP('white');
        }

        else {
            setCorFundoI('#f5b816');
            setCorFundoP('#f5b816');
        }
    }
    /* Essa é uma constante que armazena uma função aero que tem um valor passado por parâmetro, utilizado para alterar a cor de fundo de um ou outro componente, a função foi feita dessa forma para evitar que ocorresse um erro de renderização, caso uma função com parâmetro e verificação fosse chamada diretamente pelos métodos onFocus e onBlur */

    const restaurarCor = (p) => {
        /* if ( p === "input" ) {
            setCorFundoI('#f5b816');
        }

        else if ( p === "picker" ) {
            setCorFundoP('#f5b816');
        } 
        Para restaurar a cor não é necessário usar o parâmetro, porque ou um componente está em foco ou não, por isso se nenhum estiver em foco os dois vão ter a cor restaurada  */

        // else {
            setCorFundoI('#f5b816');
            setCorFundoP('#f5b816');
        // }
    }

    function alteraNome(nome_digitado) {
        setNome(nome_digitado);
    }

    function trocarItemSelec(item_index) {
        setItemSelec(item_index);
    }

    function verifica() {
        if ( nome != '' ) {
            if ( itemSelecionado != 'Selecione' ) {
                alert("Olá, " +nome+ "! Você escolheu a Linguagem: " +itemSelecionado);
            }

            else {
                alert(nome+ ", por favor selecione um item.");
            }
        }

        else {
            alert("Olá, digite um nome na caixa texto.");
        }
    }

    let textoConteudo = "No mundo do React Native, o componente Picker (selecionador) se refere a um componente que permite ao usuário escolher entre um conjunto de opções. \n\nVerifique o exemplo abaixo:";
    let textoInput = "Digite seu nome:";
    let textoPicker = "Escolha uma das opções abaixo:";
    let textoPress = "CLIQUE AQUI";

    return (
        <View id="conteudo" style={ estilos.conteudo }>
            <Text style={ estilos.textoConteudo }>{textoConteudo}</Text>

            <Text style={[ estilos.textoConteudo, estilos.textosInputPicker ]}>{textoInput}</Text>

            <TextInput style={[ estilos.textInput, { backgroundColor: corFundoInput } ]} onFocus={ () => alterarCor('input') } onBlur={ () => restaurarCor('input') } value={ nome } onChangeText={ alteraNome } ></TextInput>
            {/* Caixa de texto com as props padrão */}

            <Text style={[ estilos.textoConteudo, estilos.textosInputPicker ]}>{textoPicker}</Text>

            <Picker style={[ estilos.picker, { backgroundColor: corFundoPicker } ]} onFocus={ () => alterarCor('picker') } onBlur={ () => restaurarCor('picker') } selectedValue={ itemSelecionado } onValueChange={ trocarItemSelec }>
            {/* Usando uma função aero que chama outra função com um valor passado por parâmetro */}

                <Picker.Item label = "Selecione..."  value = "Selecione" />
                <Picker.Item label = "Linguagem Java"  value = "Java" />
                <Picker.Item label = "Linguagem Javascript"  value = "JS" />
                <Picker.Item label = "Linguagem PHP"  value = "PHP" />
                {/* Itens de seleção, não esqueça de colocar com I maiúsculo. Todos os itens precisam ter um label e um valor, como os options do html */}
            </Picker>

            <View style={{ alignItems: 'center' }}>
                <Pressable onPress = {verifica} style={ estilos.botao }>
                    <Text style={ estilos.textoBotao }>{textoPress}</Text>
                </Pressable>
                {/* Ou Touchable Highlight */}
            </View>
        </View>
    )
}

export default Conteudo;