/* Aula 19 - Navegação entre telas, Stack Navigation - Desafios 4 e 5, Componente com a estrutura do conteúdo de cada tela */

import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { estilo } from './estilos';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function ConteudoTelas(props) {
    const navegacao = useNavigation();
    let botao1, botao2, param1, param2;
    let proxima = props.proximaTela;
    
    const [ ItemSelecionado, setItem ] = useState('');

    function alterarItem(valor) {
        setItem(valor);
    }

    if ( props.telaFinal ) {
        botao1 = 'Sou Médico';
        botao2 = 'Sou Paciente';
        param1 = 'medico';
        param2 = 'paciente';
    }

    else {
        botao1 = 'Voltar';
        botao2 = 'Continuar';
        param1 = 'voltar';
        param2 = 'avancar';
    }

    const navegarTelas = (escolha) => {
        if ( escolha == 'voltar' ) {
            navegacao.goBack();
        }

        else if ( escolha == 'avancar' ) {
            navegacao.navigate(proxima);
        }

        else if ( escolha == 'paciente' ) {
            navegacao.navigate('TelaPaciente');
        }

        else if ( escolha == 'medico' ) {
            navegacao.navigate('TelaMedico');
        }

        else {
            /* navegacao.navigate('TelaUm'); */

            alert("Selecione uma das opções!");
            /* Usado apenas na tela quatro */
        }
    }

    /* Essa variável não pode ser definida como constante, pois seu valor vai ser alterado de acordo com uma prop do componente */
    let viewBotoes = (
        <View style={ estilo.navegacao }>
            <Pressable style={[ estilo.pressionaveis, estilo.pular ]} onPress={ () => navegarTelas(param1) }>
                <Text style={[ estilo.textoPress, { color: 'rgb(48, 111, 225)' } ]}>{botao1}</Text>
            </Pressable>

            <Pressable style={[ estilo.pressionaveis, estilo.proximo ]} onPress={ () => navegarTelas(param2) }>
                <Text style={[ estilo.textoPress, { color: 'white' } ]}>{botao2}</Text>
            </Pressable>
        </View>
    )

    if ( props.telaInicial ) {
        viewBotoes = (
            <View style={ estilo.navegacao }>
                <Pressable style={[ estilo.pressionaveis, estilo.proximo ]} onPress={ () => navegarTelas(param2) }>
                    <Text style={[ estilo.textoPress, { color: 'white' } ]}>{botao2}</Text>
                </Pressable>
            </View>
        )
    }

    else if ( props.telaFinal ) {
        viewBotoes = (
            <View style={[ estilo.navegacao, { flexDirection: 'column' } ]}>
                <Picker selectedValue = { ItemSelecionado } onValueChange = { alterarItem } style = { estilo.caixasTexto }>
                    <Picker.Item value = '' label = 'Selecione' />
                    <Picker.Item value = 'paciente' label = 'Sou Paciente' />
                    <Picker.Item value = 'medico' label = 'Sou Médico' />
                </Picker>

                <View style = {{ alignItems: 'center' }}>
                    <Pressable style = {[ estilo.pressionaveis, estilo.proximo ]} onPress = { () => navegarTelas(ItemSelecionado) }>
                        <Text style={[ estilo.textoPress, { color: 'white' } ]}>Continuar</Text>
                    </Pressable>
                </View>
            </View>
        )
    }

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.banner }>
                <Image source={ props.imagem } style={ estilo.imagem } resizeMode='contain' />
            </View>

            <View style={ estilo.viewPrincipal }>
                <Text style={ estilo.titulo }>{ props.titulo }</Text>

                <Text style={ estilo.texto }>{props.texto}</Text>
            </View>

            {viewBotoes}
        </View>
    )
}