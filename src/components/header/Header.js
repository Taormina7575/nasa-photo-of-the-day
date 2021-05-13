import React from "react";
import "./Header.css";
import styled from 'styled-components'

const Headerhead = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: gray;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Headerheading = styled.h1`
    font-size: 8rem;
    color: black;
    letter-spacing: 0.5rem;
`
export default function Header(){
    return (
        <Headerhead>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Farchive%2Fe%2Fe5%2F20080615180019!NASA_logo.svg%2F120px-NASA_logo.svg.png&f=1&nofb=1" alt="Nasa Logo"></img>
            <Headerheading>Universe Pics</Headerheading>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Farchive%2Fe%2Fe5%2F20080615180019!NASA_logo.svg%2F120px-NASA_logo.svg.png&f=1&nofb=1" alt="Nasa Logo"></img>
        </Headerhead>
    )
}