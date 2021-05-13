import React from 'react';
import styled from 'styled-components'

const Nasaimg = styled.img`
    object-fit: fill;
    height: 70rem;
    width: 100%;
`

export default function Dayphoto(props) {
    return (
        <div>
            <Nasaimg src={props.props.hdurl} alt={props.props.title}></Nasaimg>
        </div>
    )
}