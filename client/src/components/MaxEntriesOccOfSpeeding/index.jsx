import React, { useState } from 'react'
import Heading from '../Utilities/Heading';
import Wrapper from '../wrapper';
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled';
import MaxEntriesSpeedContainer from './MaxEntriesSpeedOcc.styled';

const MaxEntriesOccOfSpeeding = () => {

    const [dateTime, setDateTime] = useState('');


    return (
        <MaxEntriesSpeedContainer className='max-entries-occ-speeding-details'>
            <Wrapper>
                <div className="max-entries-occurences">
                    <Heading className='heading' heading='Maximum Entries Occurences of Speeding on basis of Wind' />
                    <div className="search-details">
                        <SearchOutput className="search-output"><p>South-North : 15</p></SearchOutput>
                    </div>
                </div>
            </Wrapper >
        </MaxEntriesSpeedContainer>
    )
}

export default MaxEntriesOccOfSpeeding;