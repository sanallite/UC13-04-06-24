/* Aula 10 - Componentes dentro de componentes, Desafio 6 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './estilos';

function ItensConteudo(props) {
    let titulo = props.titulo;
    let texto1 = props.texto1;
    let texto2 = props.texto2;
    let texto3 = props.texto3;
    let imagem = props.img;

    return (
        <View style={ estilos.itemConteudo }>
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'rgb(101, 230, 104)', margin: '0.5em' }}>{titulo}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 5 }}>
                    <Image source={ imagem } style={ estilos.imagemItemConteudo }></Image>
                </View>

                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>{texto1}</Text>
                    <Text style={{ color: 'gray' }}>{texto2}</Text>
                    <Text style={{ color: 'gray' }}>{texto3}</Text>
                </View>
                {/* Utilizando variáveis diferentes para definir a intensidade da fonte, mas ainda preciso aprender a fazer isso em linha, para mudar qualquer letra ou palavra. */}
            </View>
        </View>
    )
}

export default ItensConteudo;