import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from 'axios';

const Boton = styled.button`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:#FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color:#326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({ updateDatosForm, updateError }) => {

    const [datosCripto, updateCripto] = useState([]);


    useEffect(() => {
        const consultaCriptos = async () => {
            const respuesta = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
            console.log(respuesta.data)
            updateCripto(respuesta.data.Data);
        }

        consultaCriptos();

    }, []);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    const [monedaSeleccionada, SelectBody] = useMoneda('Elige la Moneda', '', MONEDAS);

    const [criptoSeleccionada, CriptoBody] = useCriptomoneda('Elige la Criptomoneda', '', datosCripto);

    const enviarDatos = (e) => {
        e.preventDefault();
        if (monedaSeleccionada === '' || criptoSeleccionada === '') {
            updateError(true);
            return;
        }
        updateError(false);
        updateDatosForm({
            'moneda': monedaSeleccionada,
            'cripto': criptoSeleccionada
        });
    }
    return (
        <form onSubmit={enviarDatos}>
            <SelectBody></SelectBody>
            <CriptoBody></CriptoBody>
            <Boton type="submit">Calcular</Boton>
        </form>
    )
}

Formulario.propTypes = {

}

export default Formulario
