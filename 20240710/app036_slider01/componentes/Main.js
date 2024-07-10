/* Aula 15 - Componentes de Interface, Slider - Conteúdo príncipal do app */

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { estilos } from '../StyleSheet/estilos';

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
            setCorCxTxt('lightblue')
        }

        else if ( estado === 'fora-foco' ) {
            setCorCxTxt('#ffffff')
        }
    }

    function alterarNome(novo_nome) {
        setNome(novo_nome);
    }

    function deslizarSlider1(index) {
        var randomColor = "#" + Math.floor( Math.random() * 16777215 ).toString(16);
        setCorTexto(randomColor);
    }

    function deslizarSlider2(index) {
        var randomColor = "#" + Math.floor( Math.random() * 16777215 ).toString(16);
        setCorFundo(randomColor);
    }

    return (
        <View>
            <Text>Oi</Text>
        </View>
    )
}