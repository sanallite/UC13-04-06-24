/* Aula 19 - Navegação entre telas, Parte 2 - Desafios 4 e 5, terceira tela */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilo } from './estilos';
import ConteudoTelas from './ConteudoTelas';

export default function TelaTres() {
    return (
        <ConteudoTelas titulo = "A carteirinha digital do paciente bariátrico" texto = "Utilize esse aplicativo nas consultas, exames, hospitais e em estabelecimentos credenciados. Aqui você encontrará essas facilidades e outras pensadas especialmente para você." imagem = { require('./img/bari_tres.png') } proximaTela = "TelaQuatro" />
    )
}