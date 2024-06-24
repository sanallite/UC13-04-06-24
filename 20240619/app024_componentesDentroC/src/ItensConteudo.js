/* Aula 10 - Componentes dentro de componentes, criando meus próprios componentes. */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/estilos';

function ItensConteudo(props) {
    let texto = props.texto;
    let corFundo = props.corFundo;
    let corFonte = props.corFonte;
    let altura = parseInt(props.altura);
    /* Convertendo em número inteiro. */
    let largura = props.largura;
    let imagem = props.img;
    let subtitulo = props.subt
    /* Criando parâmetros, pra que os itens tenham conteúdo e atributos diferentes, ainda não sei como fazer isso funcionar junto com a folha de estilo externa. */

    return (
        <View style={{ backgroundColor: corFundo, height: altura, width: largura, marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image source={ imagem } style={{ width: 50, height: 50, borderRadius: '50%', borderColor: 'red', borderWidth: 3 }}></Image>
            <Text style={{ color: corFonte }}>{texto}</Text>
            <Text>{subtitulo}</Text>
        </View>
    )
}

export default ItensConteudo;