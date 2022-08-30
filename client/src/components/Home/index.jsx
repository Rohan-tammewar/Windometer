import React from 'react'
import DistrictDetails from '../DistrictDetails';
import DistrictWindDetails from '../DistrictWindDetails/Index';
import HomeMainContainer from './Home.styled';

const Home = () => {
    return (
        <HomeMainContainer>
            <div className="home-details">
                <DistrictWindDetails />
                <DistrictDetails />
            </div>
        </HomeMainContainer>
    )
}

export default Home;