/* Aula 17 - Componente FlatList, Desafio 2 - Componente da Lista */

import React from 'react';
import { ScrollView, View, Text, Image, FlatList } from 'react-native';
import { estilos } from '../estilos';

export default function Lista() {
    const musicas = [
        { nome: "Velha e Louca", album: "Pitanga", lancamento: "2011", capa: "https://akamai.sscdn.co/letras/360x360/albuns/b/a/1/2/221551683572841.jpg", tem_clipe: true },

        { nome: "Cena", album: "Pitanga", lancamento: "2011", capa: "https://akamai.sscdn.co/letras/360x360/albuns/b/a/1/2/221551683572841.jpg", tem_clipe: false },

        { nome: "Highly Sensitive", album: "Pitanga", lancamento: "2011", capa: "https://akamai.sscdn.co/letras/360x360/albuns/b/a/1/2/221551683572841.jpg", tem_clipe: false },

        { nome: "São Paulo", album: "Vem", lancamento: "2017", capa: "https://akamai.sscdn.co/letras/360x360/albuns/c/3/f/0/581711497273092.jpg", tem_clipe: false },

        { nome: "Muitos Chocolates", album: "Banda do Mar", lancamento: "2014" , capa: "https://akamai.sscdn.co/letras/360x360/albuns/8/c/0/1/376031693847843.jpg", tem_clipe: false },

        { nome: "Her Day Will Come", album: "Mallu Magalhães (2008)", lancamento: "2008", capa: "https://akamai.sscdn.co/letras/360x360/albuns/6/4/4/e/108701683572890.jpg", tem_clipe: false },

        { nome: "Vanguart", album: "Mallu Magalhães (2008)", lancamento: "2008", capa: "https://akamai.sscdn.co/letras/360x360/albuns/6/4/4/e/108701683572890.jpg", tem_clipe: true },

        { nome: "Shine Yellow", album: "Mallu Magalhães (2009)", lancamento: "2009", capa: "https://akamai.sscdn.co/letras/360x360/albuns/d/0/6/a/108691683572922.jpg", tem_clipe: true },

        { nome: "América Latina", album: "Esperança", lancamento: "2021", capa: "https://akamai.sscdn.co/letras/360x360/albuns/6/e/b/d/1097811624289458.jpg", tem_clipe: true },

        { nome: "Linha Verde", album: "Vem", lancamento: "2017", capa: "https://akamai.sscdn.co/letras/360x360/albuns/c/3/f/0/581711497273092.jpg", tem_clipe: false },
    ]
    /* Array que armazena as músicas e seus atributos */

    function renderizar({item}) {
        let clipe;

        if ( item.tem_clipe === true ) {
            clipe = "Sim"
        }

        else {
            clipe = "Não"
        }
        /* Verificando se o atributo é verdadeiro ou falso e então definindo um valor para a variável, que será exibido na tela */

        return (
            <View style={ estilos.itemLista }>
                <View style={ estilos.nome_capa }>
                    <View>
                        <Text style={ estilos.nomeMusica }>{item.nome}</Text>
                        <Text style={ estilos.nomeAlbum }>{item.album}</Text>
                    </View>

                    <View>
                        <Image source={{ uri: item.capa }} style={ estilos.capaAlbum } resizeMode='contain'></Image>
                    </View>
                </View>
                

                <View style={ estilos.ano_clipe }>
                    <Text>Ano de Lançamento: {item.lancamento}</Text>
                    <Text>Tem Clipe?  {clipe}</Text>
                </View>
            </View>
        )
    }
    /* Função chamada pela prop renderItem, que recebe os valores do item atual por parâmetro e exibe na tela todos os atributos do item */

    return (
        <ScrollView>
            <FlatList data={ musicas } keyExtractor={( item, index ) => musicas[index].nome } renderItem={ renderizar }/>
            { /* Componente de lista que recebe os dados do array musicas, define como chave primária da lista o valor do atributo nome de cada item e chama uma função para renderizar na tela os componentes. Não sendo necessário estar dentro de uma ScrollView, pois o FlatList tem rolagem ativada por padrão */ }
        </ScrollView>
    )
}
