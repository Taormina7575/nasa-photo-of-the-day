import React from 'react';
import './Daypost.css';
import Dayheader from './Dayheader';
import Dayphoto from './Dayphoto';
import Dayinfo from './Dayinfo';


export default function Daypost(props) {
    return (
        <main>
            <Dayheader props={props.props}/>
            <Dayphoto props={props.props}/>
            <Dayinfo props={props.props}/>
        </main>
    )
}