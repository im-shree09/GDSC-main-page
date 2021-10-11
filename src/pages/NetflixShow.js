import React from 'react';
import Row from '../components/Row/Row';
import Banner from '../components/Banner/Banner';
import api from '../api/api';
export const NetflixShow = () => {
    return (
        <div>
            
            <Banner /> 
            <Row 
            title="Shows"
            fetchUrl={api.fetchShows}
            isLargeRow  
            />  
        </div>
    );
}
export default NetflixShow