import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
/* O selecionador de data não funciona na web, tenho que testar em casa, mas só vai estar no projeto se liberarem a rede */

export default function Formulario() {
    const [ compras, setCompras ] = useState([]);

    const salvarCompra = (compraAtual) => {
        setCompras( (comprasAnteriores) => [...comprasAnteriores, compraAtual]);
        console.log(compras);
    }

    const [ descricaoCompra, setDescricao ] = useState('');
    const [ valorCompra, setValor ] = useState('');
    const [ dataCompra, setData ] = useState( new Date() );

    const enviarCompra = () => {
        salvarCompra({ descricaoCompra, valorCompra })
    }

    /* const salvarCompra = (compraAtual) => {
        setCompras([...compras, compraAtual]);
        console.log(compras);
    } */

    return (
        <View>
            <Text>Adicione</Text>

            <TextInput placeholder='Descrição' value={ descricaoCompra } onChangeText={ setDescricao }/>
            <TextInput placeholder='Valor' value={ valorCompra } onChangeText={ setValor }/>
            {/* <DatePicker
                date={ dataCompra }
            /> */}

            <Button onPress={ enviarCompra } title='Enviar'/>
        </View>
    )
}