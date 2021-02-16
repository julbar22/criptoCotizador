import React, { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import imagen from './cryptomonedas.png';
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import Cotizacion from "./components/Cotizacion";
import axios from 'axios';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width:900px;
  margin:0 auto;
  @media (min-width:992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  }
`;

const Imagen = styled.img`
  max-width:100%;
  margin-top:5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top:80px;

  &::after{
    content:'';
    width:100px;
    height:6px;
    background-color:#66A2FE;
    display:block 
}
`;
function App() {

  const [error, updateError] = useState(false);
  const [datosForm, updateDatosForm] = useState({ 'moneda': '', 'cripto': '' });
  const [resultadoCotizacion, updateResultado] = useState({})
  const [loading, updateLoading] = useState(false);

  useEffect(() => {
    const cotizar = async () => {
      if (datosForm.moneda === '')
        return;
      updateLoading(true);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${datosForm.cripto}&tsyms=${datosForm.moneda}`;
      const resultado = await axios.get(url);
      setTimeout(() => {
        updateResultado(resultado.data.DISPLAY[datosForm.cripto][datosForm.moneda]);
        updateLoading(false);
      }, 3000);

    }
    cotizar()


  }, [datosForm])

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen}
          alt="imagen cripto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        {error ? <Error label="Los campos son obligatorios"></Error> : null}
        <Formulario updateError={updateError} updateDatosForm={updateDatosForm} />
        {!error ? !loading ? <Cotizacion resultado={resultadoCotizacion}></Cotizacion> : <Spinner></Spinner> : null}
      </div>
    </Contenedor>
  );
}

export default App;
