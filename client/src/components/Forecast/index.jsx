import React, { useState } from 'react'
import { directionsOptions, getWindDirectionProbability } from '../../data'
import ProbableWindFlowContainer from './Forecast.styled'
import Button from '../Utilities/Button'
import Dropdown from '../Utilities/Dropdown'
import { FormGroup } from '../Utilities/Form/Form.styled'
import Heading from '../Utilities/Heading'
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled'
import Wrapper from '../wrapper'

const Forecast = () => {
  const [windFlowProbabilty, setWindFlowProbabilty] = useState('')
  const onWindFlowSubmit = (e) => {
    e.preventDefault()

    const details = new FormData(e.target)

    const responseData = {
      sourceDirection: details.get('sourceDirection'),
      destinationDirection: details.get('destinationDirection'),
    }

    const response = getWindDirectionProbability(responseData)

    response.then((res) => {
      setWindFlowProbabilty(res.responseMessage.data.message)
    })
    // setWindFlowProbabilty(response.data.message)
  }

  return (
    <div>
      <ProbableWindFlowContainer className="probable-wind-details">
        <Wrapper>
          <Heading
            className="heading"
            heading="Probable wind flow based on current month"
          />
          <form action="post" onSubmit={(e) => onWindFlowSubmit(e)}>
            <div className="form-inline-group">
              <FormGroup className="form-group">
                <Dropdown
                  options={directionsOptions}
                  placeholder="directions from..."
                  name="sourceDirection"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Dropdown
                  options={directionsOptions}
                  placeholder="directions to..."
                  name="destinationDirection"
                />
              </FormGroup>
            </div>
            <FormGroup className="form-control">
              <Button buttonType="submit" onClick={null} value="check" />
            </FormGroup>
          </form>
          <div className="max-entries-occurences">
            <div className="search-details">
              <SearchOutput className="search-output">
                <p>{windFlowProbabilty}</p>
              </SearchOutput>
            </div>
          </div>
        </Wrapper>
      </ProbableWindFlowContainer>
    </div>
  )
}

export default Forecast
