import React from 'react';


export default function Dayheader(props) {
    return (
        <div className='photoHeadingWrapper'>
            <h2 className='photoHeading'>Photo Of the Day - {props.props.date}</h2>   
        </div>
    )
}