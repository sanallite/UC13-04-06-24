/* Aula 10 - Componentes dentro de componentes, criando meus próprios componentes. */

import React from 'react';
import {Text, View} from 'react-native';
import { estilos } from './styleSheet/estilos';

function Rodape() {
    let autor = "Márcio Teodoro";
    let data = "19 de Junho de 2024";

    return (
        <View style={ estilos.rodape }>
            <Text style={ estilos.rodAutor }>{autor}</Text>
            <Text style={ estilos.rodAutor }>{data}</Text>
        </View>
    )
}

export default Rodape;
/* Exportando a função, que tem o mesmo nome do arquivo, ambos precisam ter o nome com inicial maiúscula */