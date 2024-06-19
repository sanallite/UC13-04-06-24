/* Aula 10 - Componentes dentro de componentes, criando meus próprios componentes. */

import React from 'react';
import {ScrollView, Text} from 'react-native';
import { estilos } from './styleSheet/estilos';

function Conteudo() {
    let texto = "Olá mundo";

    return (
        <ScrollView style={ estilos.conteudo }>
            <Text>{texto}</Text>
        </ScrollView>
    )
}

export default Conteudo;
/* Exportando a função, que tem o mesmo nome do arquivo, ambos precisam ter o nome com inicial maiúscula */