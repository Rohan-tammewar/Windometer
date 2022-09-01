import React, { useEffect, useState } from 'react'
import Heading from '../Utilities/Heading'
import Wrapper from '../wrapper'
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled'
import MaxEntriesSpeedContainer from './MaxEntriesSpeedOcc.styled'
import { getMaximumWindDirection } from '../../data'

const MaxEntriesOccOfSpeeding = () => {
  const [maxWindDirectionOccurence, setMaxWindDirectionOccurence] = useState(
    'No Data',
  )
  useEffect(() => {
    getMaximumWindDirection().then((res) => {
      setMaxWindDirectionOccurence(res.data.result)
    })
  }, [])

  return (
    <MaxEntriesSpeedContainer className="max-entries-occ-speeding-details">
      <Wrapper>
        <div className="max-entries-occurences">
          <Heading className="heading" heading="Frequent windflow direction" />
          <div className="search-details">
            <SearchOutput className="search-output">
              <p>{maxWindDirectionOccurence}</p>
            </SearchOutput>
          </div>
        </div>
      </Wrapper>
    </MaxEntriesSpeedContainer>
  )
}

export default MaxEntriesOccOfSpeeding
