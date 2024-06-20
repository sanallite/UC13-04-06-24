/* Aula 10 - Componentes dentro de componentes, criando meus próprios componentes. */

import React from 'react';
import {Text, View} from 'react-native';
import { estilos } from './styleSheet/estilos';

function Rodape(props) {
    let autor = "Márcio Teodoro";
    let autor2 = props.autor;
    let data = "19 de Junho de 2024";
    let data2 = props.data;
    /* Criando parâmetros, pra que os itens tenham conteúdo e atributos diferentes, ainda não sei como fazer isso funcionar junto com a folha de estilo externa. */

    return (
        <View style={ estilos.rodape }>
            <Text style={ estilos.rodAutor }>{autor2}</Text>
            <Text style={ estilos.rodAutor }>{data2}</Text>
        </View>
    )
}

export default Rodape;
/* Exportando a função, que tem o mesmo nome do arquivo, ambos precisam ter o nome com inicial maiúscula */