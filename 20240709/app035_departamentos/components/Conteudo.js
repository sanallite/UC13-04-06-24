/* Aula 14 - Meu desafio usando Picker - Componente de conteúdo */

import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { style } from '../StyleSheet';

function Conteudo() {
    const departamentos = [
      { nome: 'Padaria', 
        descricao:"Sinta o aroma irresistível dos pães e doces fresquinhos na nossa Padaria! Diariamente, nossos padeiros artesanais preparam uma grande variedade de pães, bolos, tortas e biscoitos, utilizando ingredientes de alta qualidade e receitas tradicionais. Desde o pão francês crocante ao bolo caseiro, temos tudo para tornar seus momentos especiais ainda mais deliciosos. Passe na nossa Padaria e leve para casa o sabor e a tradição que fazem a diferença!", 
        imagem: 'https://samsclub.vtexassets.com/assets/vtex.file-manager-graphql/images/5a6cdc9f-ca2f-412a-9a31-4e27c523c9e4___8880ddb1edca8292d7366d02e853cca0.png' },

      { nome: 'Limpeza', 
        descricao: "Os produtos de limpeza são essenciais para o dia a dia, já que são responsáveis por auxiliar na manutenção da higiene de superfícies ou objetos como móveis, pisos, roupas e utensílios domésticos. No Sam's Club você encontrará uma ampla variedade de produtos de limpeza, incluindo desinfetantes, água sanitária, detergentes, amaciantes e muitos outros produtos para manter sua casa, escritório ou empresa impecáveis.", 
        imagem: 'https://samsclub.vtexassets.com/assets/vtex.file-manager-graphql/images/14e75243-6227-4bb3-b1f5-d1c1b81f9f0b___79e95abd3a16f2353d2a7a8dc6a1cf72.png'},

      { nome: 'Vinhos',
        descricao: "Com seus aromas e sabores únicos, o vinho é capaz de encantar qualquer paladar. Desde a produção de uvas até a fermentação, envelhecimento e engarrafamento, cada etapa é cuidadosamente planejada para obter a melhor qualidade possível. Ao ser sócio Sam’s Club, você tem acesso aos melhores tipos de vinhos! Temos uma ampla seleção de vinhos tintos, brancos, rosés e espumantes, além de várias opções de vinhos argentinos, vinhos portugueses, vinhos chilenos e muito mais.",
        imagem: 'https://samsclub.vtexassets.com/assets/vtex.file-manager-graphql/images/c6cccf64-c5cc-4f23-87f2-6fae1b773a12___919ec3dc03d1b05758c3fb973371f413.png'
      },

      { nome: 'Açouge',
        descricao: "As melhores carnes para o dia a dia, ocasiões especiais e aquele churrasco no final de semana, você encontra no Sam’s Club. Oferecemos uma variedade de cortes de qualidade para você preparar suas receitas favoritas! Escolha entre marcas renomadas como Member's Mark, Best Beef, Maturatta, e as marcas premium importadas Haciendas, Campo Del Plata, Angus Las Piedas e mais. Confira nossa seleção especial!",
        imagem: 'https://samsclub.vtexassets.com/assets/vtex.file-manager-graphql/images/a5e0bdb9-7518-4d60-ad09-d714e990150b___bb8e735f6935115bb48c64f5ed989f74.png'
      },

      { nome: 'Hortifruti',
        descricao: "Descubra a frescura e a qualidade incomparável do nosso setor de Hortifruti! Oferecemos uma ampla variedade de frutas, verduras e legumes frescos, colhidos diretamente das melhores fazendas para garantir que você leve para casa o melhor da natureza. Encontre tudo o que precisa para uma alimentação saudável e saborosa, com produtos selecionados com rigor e amor pela terra. Venha conhecer nosso Hortifruti e aproveite a sazonalidade e frescor em cada visita!",
        imagem: 'https://samsclub.vtexassets.com/assets/vtex.file-manager-graphql/images/37c0feca-3fe9-46b2-b932-05e875721eb7___8648674f29ff923111c1a607d23976bf.png'
      }
    ];
    /* Array com os objetos que vão ser usados para exibir na tela, os arrays usam apenas indíces númericos no js, enquanto objetos podem usar strings, como o nome */

    const [ nomeDept, setNome ] = useState('');
    const [ descricaoDept, setDesc ] = useState('');
    const [ imgDept, setImg ] = useState('');
    const [ itemSelect, setItem ] = useState('');

    function alteraDept(valor) {
        setItem(valor);

        if ( valor != '' ) {
            setNome( departamentos[ parseInt(valor) ].nome );
            setDesc( departamentos[ parseInt(valor) ].descricao );
            setImg( departamentos[ parseInt(valor) ].imagem );
        }

        else {
            setNome('');
            setDesc('');
            setImg('');
        }
    }

    return (
        <View style={ style.conteudo }>
            <Picker selectedValue={ itemSelect } onValueChange={ alteraDept } style={ style.selecionador }>
                <Picker.Item label='Selecione um Departamento'  value= '' />
                <Picker.Item label='Padaria'  value= '0' />
                <Picker.Item label='Limpeza'  value= '1' />
                <Picker.Item label='Vinhos'  value= '2' />
                <Picker.Item label='Açouge'  value= '3' />
                <Picker.Item label='Hortifruti'  value= '4' />
            </Picker>

            <View style={ style.departamento }>
                <Image source = {{ uri: imgDept }} resizeMode='contain' style={{ width: 200, height: 200 }}></Image>
                { /* Duas chaves para o uri */ }
                <Text style={ style.titulo }>{ nomeDept }</Text>
                <Text style={ style.descricaoDept }>{ descricaoDept }</Text>
            </View>
        </View>
    )
}

export default Conteudo;
