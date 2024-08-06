/* Aula 19 - Navegação entre telas, Parte 2 - Desafios 4 e 5, segunda tela */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './estilos';
import ConteudoTelas from './ConteudoTelas';

export default function TelaDois() {
    return (
        <ConteudoTelas titulo = "Dicas semanais de especialistas" texto = "Para chegar ao peso ideal com saúde é preciso estar sempre bem informado. Você vai receber dicas, vídeos, notícias, receitas, sugestões de atividades físicas e cuidados que vão auxiliar no pós operatório e na manutenção do peso." imagem = { require('./img/bari_dois.png') } proximaTela = "TelaTres" />
    )
}