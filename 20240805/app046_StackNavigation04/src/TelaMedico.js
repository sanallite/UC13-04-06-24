/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio 5, Tela de entrada do médico */

import React from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './estilos';

export default function TelaMedico() {
    const navegacao = useNavigation();

    const navegarTelas = (escolha) => {
        if ( escolha == 'voltar' ) {
            navegacao.goBack();
        }
    }

    return (
        <View style={ estilo.fundo }>
            <View style={[ estilo.conteudoPaciente_Medico, { justifyContent: 'center' } ]}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={ require('./img/Logo.png') } resizeMode='contain' style={ estilo.imagem }></Image>
                </View>

                <View style={{ paddingHorizontal: '2rem' }}>
                    <TextInput style={ estilo.caixasTexto } placeholder='Email' keyboardType='email-address' />
                    <TextInput style={ estilo.caixasTexto } placeholder='Senha' secureTextEntry={ true } />

                    <Text style={ estilo.esqueci_senha }>Esqueci minha senha</Text>
                </View>

                <View style={ estilo.cadastrar_entrar }>
                    <Pressable style={[ estilo.pressionaveis, estilo.proximo ]}>
                        <Text style={[ estilo.textoPress, { color: 'white' }]}>Entrar</Text>
                    </Pressable>
                </View>
            </View>

            <View style={ estilo.voltarPaciente_Medico }>
                <Pressable style={[ estilo.pressionaveis, estilo.pular ]} onPress={ () => navegarTelas('voltar') }>
                    <Text style={[ estilo.textoPress, { color: 'rgb(48, 111, 225)' } ]}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    )
}