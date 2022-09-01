import React, { useEffect, useState } from 'react'
import Heading from '../Utilities/Heading'
import Wrapper from '../wrapper'
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled'
import MaxWindSpeedContainer from './MaxWindSpeedOcc.styled'
import { getMaximumWindSpeed } from '../../data'

const MaxWindAndOccSpeed = () => {
  const [maxWindSpeed, setMaxWindSpeed] = useState('0')
  const [numberOfOccurence, setNumberOfOccurence] = useState('0')

  useEffect(() => {
    getMaximumWindSpeed().then((result) => {
      setMaxWindSpeed(result.data.range2 + ' - ' + result.data.range1)
      setNumberOfOccurence(result.data.count)
    })
  }, [])

  return (
    <MaxWindSpeedContainer className="max-wind-speed-details">
      <Wrapper>
        <div className="max-wind-speed-details">
          <Heading className="heading" heading="Maximum Wind Speed" />
          <div className="search-details">
            <SearchOutput className="search-output">
              <p>{maxWindSpeed} Km/hr</p>
            </SearchOutput>
          </div>
        </div>
        <div className="no-of-occurences">
          <Heading className="heading" heading="Number of Occurences" />
          <div className="search-details">
            <SearchOutput className="search-output">
              <p>{numberOfOccurence}</p>
            </SearchOutput>
          </div>
        </div>
      </Wrapper>
    </MaxWindSpeedContainer>
  )
}

export default MaxWindAndOccSpeed
