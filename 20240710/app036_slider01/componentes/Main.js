/* Aula 15 - Componentes de Interface, Slider - Conteúdo príncipal do app */

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { estilos } from '../StyleSheet/estilos';

/* Exportando a função diretamente na criação */
export default function Main() {
    let corInicialFundo = '#ffffff';
    let corInicialTexto = '#000000';

    const [ corFundo, setCorFundo ] = useState(corInicialFundo);
    const [ corFundoTexto, setCorTexto ] = useState(corInicialTexto);
    const [ corFundoCxTxt, setCorCxTxt ] = useState('#ffffff');
    const [ nome, setNome ] = useState('');

    let textoConteudo = "O Componente Slider permite que o usuário escolha um valor de um intervalo predefinido de valores, arrastando um botão ao longo de uma linha de controle deslizante, como mostrado nas figuras abaixo:";

    function verificaNome() {
        if ( nome != '' ) {
            alert("Olá, " +nome+ "! \nExperimente deslizar os componentes abaixo e trocar o padrão de cores iniciais do app!");
        }

        else {
            alert("Você precisa digitar seu nome na caixa de texto correspondente.")
        }
    }

    const corFocoCx = (estado) => {
        if ( estado === 'foco' ) {
            setCorCxTxt('#61dafb')
        }

        else if ( estado === 'fora-foco' ) {
            setCorCxTxt('#ffffff')
        }
    }

    function alterarNome(novo_nome) {
        setNome(novo_nome);
    }

    function deslizarSlider1(index) {
        if ( index != 0 ) {
            var randomColor = "#" + Math.floor( Math.random() * 16777215 ).toString(16);
            setCorTexto(randomColor);
        }

        else {
            setCorTexto(corInicialTexto);
        }
    }
    /* Função que é acionada cada vez que o valor do slider mudar, o valor indicado pela posição do circulo na linha deslizante é enviado por parâmetro automáticamente para a função, que então verifica se o index é diferente de 0, posição inicial do slider, caso for é criada uma variável que contém uma string concatenada com um método para arrendondar o número para o inferior mais próximo, com um método que escolhe um número aleatório entre 16 milhões de opções, que no caso é o número de cores existentes no padrão rgb, e então esse número gerado é convertido para uma string em formato hexadecimal, indicado pelo número 16. O valor dessa variável representa um código hexadecimal de uma cor, esse valor então é definido como a cor da variável de estado. Caso o index seja igual a zero, a cor é definida para ser a inicial. */

    function deslizarSlider2(index) {
        if ( index != 0 ) {
            var randomColor = "#" + Math.floor( Math.random() * 16777215 ).toString(16);
            setCorFundo(randomColor);
        }

        else {
            setCorFundo(corInicialFundo);
        }
    }

    return (
        <View style={[ estilos.main, { backgroundColor: corFundo }]} >
            <Text style={[ estilos.textoDestaque, { color: corFundoTexto }]} >{textoConteudo}</Text>

            <Text style={{ color: corFundoTexto }}>Digite seu nome:</Text>

            <TextInput style={[ estilos.textInput, { backgroundColor: corFundoCxTxt }]} onFocus={ () => corFocoCx('foco')  } onBlur={ () => corFocoCx('fora-foco') } value={ nome } onChangeText={ alterarNome }></TextInput>

            <Text style={[ estilos.textosSliders, { color: corFundoTexto }]}>Deslize o slider abaixo para alterar a cor dos textos:</Text>

            <Slider step={ 5 } minimumValue={ 0 } maximumValue={ 100 } onValueChange={ deslizarSlider1 } />

            <Text style={[ estilos.textosSliders, { color: corFundoTexto }]}>Deslize o slider abaixo para alterar a cor de fundo:</Text>

            <Slider step={ 10 } minimumValue={ 0 } maximumValue={ 100 } minimumTrackTintColor='white' maximumTrackTintColor='#61dafb' onValueChange={ deslizarSlider2 } />

            <View style={{ alignItems: 'center' }}>
                <Pressable onPress={ verificaNome } style={ estilos.pressable }>
                    <Text style={{ color: corFundoTexto, textAlign: 'center' }}>Clique Aqui</Text>
                </Pressable>
            </View>
        </View>
    )
}