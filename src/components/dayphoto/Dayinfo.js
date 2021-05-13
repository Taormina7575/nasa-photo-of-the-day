import React from 'react';
import styled from 'styled-components'

const Infowrap = styled.div`
    background-color: gray;
`
const Title = styled.h3`
    font-size: 5rem;
    margin-left: 5rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Explanation = styled.p`
    padding: 2rem;
    text-indent: 4rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
`
const Copyright = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 3rem;
    text-align: center;
`
export default function Dayinfo(props) {
    return (
        <Infowrap>
            <Title>{props.props.title}</Title>
            <Explanation>{props.props.explanation}</Explanation>
            <Copyright>{props.props.copyright}</Copyright>
        </Infowrap>
    )
}