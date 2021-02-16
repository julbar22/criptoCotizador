import React, {useState } from 'react'
import styled from '@emotion/styled'


const Select = styled.select`
    width:100%;
    border:none;
    border-radius:10px;
    -webkit-appearance:none;
    font-size: 1.2rem;
    display:block;
    padding: 1rem;
    
`;

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
const useCriptomoneda = (label, valor, opciones) => {

    const [cripto,updateCripto] = useState(valor);


    const SelectBodyCripto = () => (
        <div>
            <Label>{label}</Label>
            <Select
                onChange={(e)=>updateCripto(e.target.value)}
                value={cripto}
            >
                <option value="" >---Seleccione la CriptoMoneda---</option>
                {opciones.map(opcion => (<option value={opcion.CoinInfo.Name} key={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>))}
            </Select>
        </div>
    )

    return [cripto,SelectBodyCripto,updateCripto];
}

export default useCriptomoneda;