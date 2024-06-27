/* Aula 11 - Componentes de interface, Touchable Highlight - Desafio 3 - Componente rodapé */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { estilos } from '../estilos';

function botaoInicio() {
    alert("Você quer voltar para a página inícial?")
  }

function Rodape() {
    let botoes = ["Notificações", "Início", "Configurações"];
    let iconeBotoes = [
        require('../assets/bell-regular.svg'),
        require('../assets/house-solid.svg'),
        require('../assets/gear-solid.svg'),
    ];

    return (
        <View style={ estilos.rodape }>
            <View style={ estilos.botoesRodape }>
                <Image source={ iconeBotoes[0] } style={{ width: 25, height: 30 }}></Image>

                <Text style={ estilos.nomeBotoesRP }>{botoes[0]}</Text>
            </View>
            
            <Pressable style={ estilos.botoesRodape } onPress={ botaoInicio } >
                <Image source={ iconeBotoes[1] } style={{ width: 35, height: 30 }}></Image>

                <Text style={{ color: "#43b941" }}>{botoes[1]}</Text>
            </Pressable>

            <View style={ estilos.botoesRodape }>
                <Image source={ iconeBotoes[2] } style={{ width: 30 , height: 30}}></Image>

                <Text style={ estilos.nomeBotoesRP }>{botoes[2]}</Text>
            </View>
        </View>
    )
}

export default Rodape;