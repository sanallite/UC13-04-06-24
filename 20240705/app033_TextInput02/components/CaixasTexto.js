/* Aula 13 - Componentes de Interface, TextInput - Desafio 2 - Caixas de Texto */

import React from 'react';
import { TextInput, View } from 'react-native';
import { estilos } from '../estilos';

function CaixasTexto(props) {
    let place = props.place;
    let limit = props.limit;
    let caps = props.caps;
    let keyboard = props.keyboard;
    let edit = props.edit;
    let secure = props.secure;
    let multi = props.multi;
    /* Pegando as propriedades por parâmetro */

    /* if ( edit  === 'true' ) {
        edit = true;
    } */
    /* Convertendo as strings em booleanos só por garantia, não mais necessário com o uso do array. */

   /*  else {
        edit = false;
    } */

    /* if ( secure  === 'true' ) {
        secure  = true;
    } */

    /* else {
        secure = false;
    } */

    /* if ( multi === 'true' ) {
        multi = true;
    } */

    /* else {
        multi = false
    } */

    return (
        <TextInput placeholder={ place } maxLength={ limit } autoCapitalize={ caps } inputMode={ keyboard } readOnly={ edit }  multiline={ multi } secureTextEntry={ secure } style={ estilos.caixaTexto }>
        {/* A capitalização das letras e a limitação dos teclados só ocorre quando o app é rodado num celular */}
        </TextInput>
    )
}

export default CaixasTexto;