/* Aula 13 - Componentes de Interface, TextInput - Desafio 2 - Corpo da tela */

import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../estilos';
import CaixasTexto from './CaixasTexto';

function Corpo() {
    let instrucao = "Verifique o formulário abaixo:";

    let inputs = [
        { nome: 'Digite seu nome', limit: 30, caps: 'characters', keyboard: 'default', edit: false, multi: false, secure: false },
        { nome: 'Qual é a sua idade?', limit: 2, caps: 'none', keyboard: 'number-pad' },
        { nome: 'CPF 111.222.333-44', caps: 'none', keyboard: 'number-pad', edit: true },
        { nome: 'Digite seu e-mail', caps: 'none', keyboard: 'email-adress' },
        { nome: 'Digite seu número de celular', caps: 'none', keyboard: 'phone-pad' },
        { nome: 'Observações', caps: 'words', multi: true },
        { nome: 'Crie uma senha', secure: true, caps: 'none' },
    ];
    /* Não é necessário repetir todos os campos, se caso um não estiver definido, ele usará a configuração padrão */

    let caixas = [];

    for ( i = 0; i < inputs.length; i++ ) {
        caixas.push(
            <CaixasTexto place= { inputs[i].nome } limit= { inputs[i].limit } caps= { inputs[i].caps } keyboard= { inputs[i].keyboard } edit= { inputs[i].edit }  multi= { inputs[i].multi } secure= { inputs[i].secure } />
        )
    }
    /* Pesquise mais sobre forEach para tentar fazer isso de outra forma. */

    return(
        <View style={ estilos.corpo }>
            <Text>{instrucao}</Text>
            
            { caixas }
            {/* Usando um array com itens de lista para armazenar os dados e então usando um loop para criar os componentes que irão aparecer na tela, armazenando eles no array na linha acima. */}

            {/* <CaixasTexto place= 'Digite seu nome' limit= '30' caps= 'characters' keyboard= 'default' edit='false'  multi= 'false' secure= 'false' />

            <CaixasTexto place= 'Qual é a sua idade?' limit= '2' keyboard= 'number-pad' />

            <CaixasTexto place= 'CPF 111.222.333-44' edit= 'true' keyboard= 'number-pad' />

            <CaixasTexto place= 'Digite seu e-mail' keyboard= 'email-address' />

            <CaixasTexto place= 'Digite seu número de celular' keyboard= 'phone-pad' />

            <CaixasTexto place= 'Observações' multi= 'true' />

            <CaixasTexto place= 'Crie uma senha' secure= 'true' /> */}
            {/* Criando o mesmo componente mais de uma vez, mas com propriedades diferentes, que são enviadas por parâmetro */}
        </View>
    )
}

export default Corpo;