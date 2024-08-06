/* Aula 19 - Navegação entre telas, Parte 2 - Desafios 4 e 5, Tela inicial */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './estilos';
import ConteudoTelas from './ConteudoTelas';

export default function TelaUm() {
    return (
        <ConteudoTelas titulo = 'Bem Vindo(a) ao Aplicativo Barilife!' imagem = { require('./img/bari_um.png') } texto = 'A Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM) desenvolveu o aplicativo pensando em você, paciente bariátrico. É um aplicativo inovador e gratuito.' proximaTela = "TelaDois" telaInicial />
    )
}