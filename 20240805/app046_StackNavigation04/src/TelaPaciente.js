/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio 5, Tela de cadastro do paciente */

import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { estilo } from './estilos';

export default function TelaPaciente() {
    const titulo = "Cadastro";

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.cabecalhoPaciente_Medico }>
                <Text style={ estilo.tituloPaciente_Medico }>{titulo}</Text>
            </View>

            <View style={ estilo.conteudoPaciente_Medico }>
                <TextInput placeholder='Nome'  style={ estilo.caixasTexto } />
                <TextInput placeholder='Sobrenome'  style={ estilo.caixasTexto } />
                <TextInput placeholder='Email'  style={ estilo.caixasTexto } />
                <TextInput placeholder='Confirmar Email'  style={ estilo.caixasTexto } />
                <TextInput placeholder='Senha'  style={ estilo.caixasTexto } />
            </View>
        </View>
    )
}