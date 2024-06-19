/* Aula 10 - Componentes dentro de componentes, criando meus próprios componentes. */

import React from "react";
import {View, Text, Image} from 'react-native';
import { estilos } from './styleSheet/estilos';

function Cabecalho() {
    let img = "https://www.pr.senac.br/images/topo_site_bl1_2018.png";
    let titulo = "Desenvolvimento Mobile";
    let subtitulo = "Fundamentos III";

    return (
        <View style={ estilos.cabecalho }>
            <Text style={ estilos.cabTitulo }>{titulo}</Text>

            <Image source={{ uri: img }} style={ estilos.cabImagem }></Image>

            <Text style={ estilos.cabSubTitulo }>{subtitulo}</Text>
        </View>
    )
}

export default Cabecalho;
/* Exportando a função, que tem o mesmo nome do arquivo, ambos precisam ter o nome com inicial maiúscula */