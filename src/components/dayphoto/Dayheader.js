import React from 'react';
import styled from 'styled-components'

const Photoheadingwrapper = styled.div`
    background-color: lightgray;
`
const Photoheading = styled.h2`
    font-size: 5rem;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
export default function Dayheader(props) {
    return (
        <Photoheadingwrapper>
            <Photoheading>Photo Of the Day - {props.props.date}</Photoheading>   
        </Photoheadingwrapper>
    )
}