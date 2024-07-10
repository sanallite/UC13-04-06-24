/* Aula 14 - Meu desafio usando Picker - Componente de conteúdo */

import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { style } from '../StyleSheet';

function Conteudo() {
    const departamentos = [
      { nome: 'Mercearia', descricao:"A Mercearia do Sam's é o lugar perfeito para abastecer a sua despensa! Aqui, você encontrará uma ampla variedade de itens essenciais para tornar cada refeição uma experiência deliciosa e prática.", imagem: 'https://samsclub.vtexassets.com/assets/vtex.file-manager-graphql/images/5a6cdc9f-ca2f-412a-9a31-4e27c523c9e4___8880ddb1edca8292d7366d02e853cca0.png' }
    ];
    /* Array com os objetos que vão ser usados para exibir na tela, os arrays usam apenas indíces númericos no js, enquanto objetos podem usar strings, como o nome */

    const [ imgDept, setImg ] = useState(departamentos[0].imagem);

    return (
        <View>
            <Image source = {{ uri: imgDept }} style={{ width: 100, height: 100 }}></Image>
            /* Duas chaves para o uri */

            <Text>{ departamentos[0].descricao }</Text>
        </View>
    )
}

export default Conteudo;
