/* Aula 13 - Componentes de Interface, TextInput - Desafio 2 - Corpo da tela */

import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../estilos';
import CaixasTexto from './CaixasTexto';

function Corpo() {
    let instrucao = "Verifique o formulário abaixo:";

    return(
        <View style={ estilos.corpo }>
            <Text>{instrucao}</Text>
            
            <CaixasTexto place= 'Digite seu nome' limit= '30' caps= 'characters' keyboard= 'default' edit='false'  multi= 'false' secure= 'false' />

            <CaixasTexto place= 'Qual é a sua idade?' limit= '2' keyboard= 'number-pad' />

            <CaixasTexto place= 'CPF 111.222.333-44' edit= 'true' keyboard= 'number-pad' />

            <CaixasTexto place= 'Digite seu e-mail' keyboard= 'email-address' />

            <CaixasTexto place= 'Digite seu número de celular' keyboard= 'phone-pad' />

            <CaixasTexto place= 'Observações' multi= 'true' />

            <CaixasTexto place= 'Crie uma senha' secure= 'true' />
            {/* Criando o mesmo componente mais de uma vez, mas com propriedades diferentes, que são enviadas por parâmetro */}
        </View>
    )
}

export default Corpo;