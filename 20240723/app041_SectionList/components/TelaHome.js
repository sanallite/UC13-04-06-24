/* Aula 18 - Componente SectionList, Componente da página inicial */

import React from 'react';
import { View, Text, Image, SectionList } from 'react-native';
/* Importando o novo componente que vai ser usado */

import { style } from '../style/StyleSheet';

export default function TelaHome(props) {
    let nome = props.nome;
    let data = props.data;
    /* Criando variáveis para armazenar os valores das props recebidos */

    var titulos = [ 'Homens', 'Mulheres' ];
    /* Um vetor que armazena os títulos das sessões da lista, que no caso é dividida entre nomes masculinos e femininos */

    var conteudos = [
        [ 'Márcio', 'David', 'Luiz', 'Giovanne' ],
        [ 'Vanessa', 'Eloisa', 'Aline', 'Emy' ]
    ]
    /* Um vetor contendo dois vetores dentro dele, contendo os nomes que serão exibidos na lista */

    const logo = require('../img/logo.png');

    function mostraDados({item}) {
        return (
            <View style={ style.dadosLista }>
                <View style={ style.itemLista }>
                    <Text>{item}</Text>
                </View>
            </View>
        )
    }
    /* Função que é chamada pela propriedade renderItem, renderizando na tela cada item da lista, que é recebido por parâmetro. */

    function mostraCabSecao({section}) {
        return (
            <View style={ style.cabSecao }>
                <Text style={ style.tituloSecao }>{section.title}</Text>
            </View>
        )
    }
    /* Função que é chamada pela propriedade renderSectionHeader, renderizando na tela o atributo title da prop sections, que é enviado por parâmetro e armazenado numa variável chamada section. */

    return (
        <View style={ style.lista }>
            <View style={ style.header }>
                <Image source= { logo } style={ style.logo } />

                <Text style={ style.tituloHome }>React Native - Section List</Text>

                <Text style={ style.subtitulo }>Início</Text>
            </View>

            <View style = { style.lista }>
            { /* View com um estilo que faz que ele ocupe o espaço flexível maior do componente paí, que também ocupa o espaço flexível maior possível */ }
                <SectionList
                    sections = {[
                        {title: titulos[0], data: conteudos[0] },
                        {title: titulos[1], data: conteudos[1] }
                    ]}
                    /* As seções da lista, que são "objetos" que devem conter os atributos title e data, com o titulo que será exibido e os dados que serão exibidos, nesse caso são os itens dos dois vetores criados, com os itens dos dados também sendo vetores. Como é mais de uma seção, a prop sections recebe um vetor de itens */

                    renderItem = { mostraDados }
                    /* Método responsável por renderizar na tela o conteúdo da lista, fazendo isso através de uma função que foi criada */

                    renderSectionHeader = { mostraCabSecao }
                    /* Método responsável por renderizar na tela os títulos de cada seção da lista, que foram definidos acima, fazendo isso através de uma função */

                    keyExtractor = { (item, index) => index }
                    /* Prop/Método que define uma chave primária para os itens da lista que estão sendo renderizados, com essa chave sendo definida como sendo o índice do item na seção que ele faz parte, não o da lista inteira renderizada ou o do vetor original */
                />
                { /* Componente da lista de seções com quatro propriedades */ }
            </View>

            <View style={ style.footer }>
            	<Text style={ style.nome_data }>DEV Mobile - {nome} - {data}</Text>
            	{ /* Exibindo o nome e a data que foram recebidos por parâmetro na hora que o componente TelaHome foi chamado */ }
            </View>
        </View>
    )
}
