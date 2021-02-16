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
const useMoneda = (label, valor, opciones) => {

    const [moneda,updateMoneda] = useState(valor);


    const SelectBody = () => (
        <div>
            <Label>{label}</Label>
            <Select
                onChange={(e)=>updateMoneda(e.target.value)}
                value={moneda}
            >
                <option value="" >---Seleccione la Moneda---</option>
                {opciones.map(opcion => (<option value={opcion.codigo} key={opcion.codigo}>{opcion.nombre}</option>))}
            </Select>
        </div>
    )

    return [moneda,SelectBody,updateMoneda];
}

export default useMoneda;