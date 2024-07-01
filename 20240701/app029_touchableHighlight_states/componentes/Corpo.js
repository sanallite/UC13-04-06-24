/* Aula 11 - Touchable Highlight, States - Corpo da tela. */

import React, { useState }  from 'react';
/* Não esqueça das chaves quando for importar o método useState */
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from '../estilos';

/* function alterarState() {
    console.log("Olá");
} */

function Corpo() {
    const [ enunciado, setEnunciado ] = useState('Clique no botão para trocar a cor de fundo!');
    const [ descricao, setDescricao ] = useState('');
    const [ corFundo, setCorFundo ] = useState('orange');
    /* Criando uma constante que contém uma variável e uma função, essa constante utiliza o método useState com um valor passado por parâmetro, esses valores nos parâmetros serão o estado inicial do conteúdo da página, que será armazenado nas variáveis e alterado pelas funções. */

    function alterarDescricao() {
        if ( corFundo == "orange" ) {
            setEnunciado("A cor de fundo foi alterada para azul e um texto foi inserido. Clique novamente para voltar ao status inicial."
            );

            setDescricao("Texto inserido em tempo real");

            setCorFundo("blue");
            /* Alterando os valores das variáveis de estado utilizando as funções criadas. */
        }

        else {
            setEnunciado("Clique no botão para trocar a cor de fundo!");

            setDescricao("");

            setCorFundo("orange");
        }
    }
    /* Essa função deve estar dentro da função principal do corpo do app. */

    return (
        <View style={ styles.body }>
            <Text style={ styles.textosCorpo }>{enunciado}</Text>
            {/* Conteúdo dinâmico conforme o valor que está na variável dentro da constante. */}

            <TouchableHighlight onPress={ alterarDescricao } style={[ styles.pressable, { backgroundColor: corFundo } ]}>
                <Text style={ styles.cliqueAqui }>Clique aqui</Text>
            </TouchableHighlight>

            <Text style={ styles.textosCorpo }>{descricao}</Text>
        </View>
    )
}

export default Corpo;