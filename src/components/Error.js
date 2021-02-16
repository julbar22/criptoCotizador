import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const LABEL = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;

`;

const Error = ({ label }) => {
    return (
        <LABEL>{label}</LABEL>
    )
}

Error.propTypes={
    label: PropTypes.string.isRequired
}

export default Error
