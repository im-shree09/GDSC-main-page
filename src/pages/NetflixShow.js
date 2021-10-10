import React from 'react';
import Row from '../components/Row/Row';
import Banner from '../components/Banner/Banner';
import api from '../api/api';
export const NetflixShow = () => {
    return (
        <div>
            {/* <h2>Netflix Show</h2>
             */}
            <Banner /> 
            <Row 
            title="NETFLIX ORIGINALS"
            isLargeRow  
            /> 
            <Row title="Top Rated" />
            <Row title="Action" />
            <Row title="Comedy" />
            <Row title="Horror" />
            <Row title="Romance" />
            <Row title="Documentary" />
        </div>
    )
}
export default NetflixShow