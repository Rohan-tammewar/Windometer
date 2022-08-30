import React, { useState } from 'react'
import Heading from '../Utilities/Heading';
import Wrapper from '../wrapper';
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled';
import MaxWindSpeedContainer from './MaxWindSpeedOcc.styled';

const MaxWindAndOccSpeed = () => {

    const [dateTime, setDateTime] = useState('');


    return (
        <MaxWindSpeedContainer className='max-wind-speed-details'>
            <Wrapper>
                <div className="max-wind-speed-details">
                    <Heading className='heading' heading='Maximum Wind Speed' />
                    <div className="search-details">
                        <SearchOutput className="search-output"><p>53 Km/hr</p></SearchOutput>
                    </div>
                </div>
                <div className="no-of-occurences">
                    <Heading className='heading' heading='No. of Occurences' />
                    <div className="search-details">
                        <SearchOutput className="search-output"><p>3</p></SearchOutput>
                    </div>
                </div>
            </Wrapper >
        </MaxWindSpeedContainer>
    )
}

export default MaxWindAndOccSpeed;