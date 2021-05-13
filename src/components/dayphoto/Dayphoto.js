import React from 'react';


export default function Dayphoto(props) {
    return (
        <div>
            <img src={props.props.hdurl} alt={props.props.title} className='image'></img>
        </div>
    )
}