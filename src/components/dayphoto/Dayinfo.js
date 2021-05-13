import React from 'react';


export default function Dayinfo(props) {
    return (
        <div className='infoWrap'>
            <h3 className='title'>{props.props.title}</h3>
            <p className='explanation'>{props.props.explanation}</p>
            <p className='copyright'>{props.props.copyright}</p>
        </div>
    )
}