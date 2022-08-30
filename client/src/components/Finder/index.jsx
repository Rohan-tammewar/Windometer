import React from 'react'
import AverageWindSpeed from '../AverageWindSpeed';
import MaxEntriesOccOfSpeeding from '../MaxEntriesOccOfSpeeding';
import MaxWindAndOccSpeed from '../MaximumWindSpeedOcc';

const Finder = () => {
    return (
        <main>
            <AverageWindSpeed />
            <MaxWindAndOccSpeed />
            <MaxEntriesOccOfSpeeding />
        </main>
    )
}

export default Finder;