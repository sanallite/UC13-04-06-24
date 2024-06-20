/* Aula 10 - Componentes dentro de componentes, criando meus próprios componentes. */

import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './styleSheet/estilos';

function ItensConteudo(props) {
    let texto = props.texto;
    let corFundo = props.corFundo;
    let corFonte = props.corFonte;
    let altura = parseInt(props.altura);
    /* Convertendo em número inteiro. */
    let largura = props.largura;
    /* Criando parâmetros, pra que os itens tenham conteúdo e atributos diferentes, ainda não sei como fazer isso funcionar junto com a folha de estilo externa. */

    return (
        <View style={{ backgroundColor: corFundo, height: altura, width: largura, marginTop: 10 }}>
            <Text style={{ color: corFonte }}>{texto}</Text>
        </View>
    )
}

export default ItensConteudo;