import React from 'react';
import location from "../image/location.svg";


export default function Card(props) {
    return (
        <div className='card'>
            <img className='main-img' src={`/images/${props.img}`} />
            <div className='info'>
                <div className='location'>
                    <img className='location-logo' src={location} alt='location' /> 
                    <p className='location-country'>{props.country}</p>
                    <a className='location-link' href='#'>View on Google Maps</a>
                </div>
                <h2 className='main-title'>{props.place}</h2>
                <p className='period'>{props.period}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}