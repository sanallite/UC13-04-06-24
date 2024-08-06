/* Aula 19 - Navegação entre telas, Parte 2 - Desafios 4 e 5, quarta tela */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './estilos';
import ConteudoTelas from './ConteudoTelas';

export default function TelaQuatro() {
    return (
        <ConteudoTelas titulo = "Uma experiência personalizada para você" texto = "Identifique-se abaixo selecionando o seu perfil como profissional médico ou paciente. Acesse um conteúdo personalizado." imagem = { require('./img/bari_quatro.png') } telaFinal />
    )
}