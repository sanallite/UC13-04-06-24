/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio 5, Tela de cadastro do paciente */

import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './estilos';

export default function TelaPaciente() {
    const navegacao = useNavigation();

    const navegarTelas = (escolha) => {
        if ( escolha == 'voltar' ) {
            navegacao.goBack();
        }
    }

    return (
        <View style={ estilo.fundo }>
            {/* <View style={ estilo.cabecalhoPaciente_Medico }>
                <Text style={ estilo.tituloPaciente_Medico }>{titulo}</Text>
                </View>  Não mais utilizado */}

            <View style={ estilo.conteudoPaciente_Medico }>
                <TextInput placeholder='Nome' style={ estilo.caixasTexto } />

                <TextInput placeholder='Sobrenome' style={ estilo.caixasTexto } />

                <TextInput placeholder='Email' keyboardType='email-address' style={ estilo.caixasTexto } />

                <TextInput placeholder='Confirmar Email' keyboardType='email-address' style={ estilo.caixasTexto } />

                <TextInput placeholder='Senha' secureTextEntry={ true } style={ estilo.caixasTexto } />

                <TextInput placeholder='Confirmar Senha' secureTextEntry={ true } style={ estilo.caixasTexto } />

                <View style={ estilo.viewPicker }>
                    <TextInput placeholder='CPF' keyboardType='number-pad' style={ estilo.caixasTexto } />

                    <Picker style={[ estilo.caixasTexto, { width: '50%' } ]}>
                        <Picker.Item value='' label='Sexo' />
                        <Picker.Item value='Masculino' label='Masculino' />
                        <Picker.Item value='Feminino' label='Feminino' />
                    </Picker>
                </View>

                <View style={ estilo.cadastrar_entrar }>
                    <Pressable style={[ estilo.pressionaveis, estilo.proximo ]}>
                        <Text style={[ estilo.textoPress, { color: 'white' } ]}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>

            <View style={ estilo.voltarPaciente_Medico }>
                <Pressable style={[ estilo.pressionaveis, estilo.pular ]} onPress={ () => navegarTelas('voltar') }>
                    <Text style={[ estilo.textoPress, { color: 'rgb(48, 111, 225)'} ]}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    )
}