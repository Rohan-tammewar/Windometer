import React, { useEffect, useState } from 'react'
import {
  directionsOptions,
  getDistrictList,
  createDistrictOptions,
  getAverageWindSpeed,
} from '../../data'
import Button from '../Utilities/Button'
import Dropdown from '../Utilities/Dropdown'
import Heading from '../Utilities/Heading'
import Wrapper from '../wrapper'
import { FormGroup, Input, Label } from '../Utilities/Form/Form.styled'
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled'
import AvgWindSpeedContainer from './AvgWindSpeed.styled'

const AverageWindSpeed = () => {
  const [avgWindSpeed, setAvgWindSpeed] = useState('0')
  const [districtOptions, setDistrictOptions] = useState('')
  const [districtList, setDistrictList] = useState('')
  const onAvgWindSpeedDetailsSubmit = (e) => {
    e.preventDefault()

    const details = new FormData(e.target)

    const responseData = {
      district: details.get('district'),
      sourceDirection: details.get('sourceDirection'),
      destinationDirection: details.get('destinationDirection'),
      timeStart: details.get('datetimeFrom'),
      timeEnd: details.get('datetimeTo'),
    }

    const response = getAverageWindSpeed(responseData)

    response.then((res) => {
      setAvgWindSpeed(res.responseMessage.data[0].AverageSpeed)
    })
  }

  useEffect(() => {
    getDistrictList().then((result) => {
      setDistrictOptions(createDistrictOptions(result.data))
    })
  }, [])

  //   console.log(districtList)

  return (
    <AvgWindSpeedContainer className="avg-wind-speed-details">
      <Wrapper>
        <Heading
          className="heading"
          heading="Calculate Average Wind Speed Details"
        />
        <div className="search-details">
          <form action="post" onSubmit={(e) => onAvgWindSpeedDetailsSubmit(e)}>
            <div className="form-inline-group">
              <FormGroup className="form-group">
                <Label htmlFor="datetime">Date & Time From...</Label>
                <Input
                  type="datetime-local"
                  placeholder="in dd-mm-yyyy hh:mm:ss"
                  name="datetimeFrom"
                  title="datetime"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label htmlFor="datetime">Date & Time To...</Label>
                <Input
                  type="datetime-local"
                  placeholder="in dd-mm-yyyy hh:mm:ss"
                  name="datetimeTo"
                  title="datetime"
                />
              </FormGroup>
            </div>
            <div className="form-inline-group">
              <FormGroup className="form-group">
                <Dropdown
                  options={directionsOptions}
                  placeholder="direction from..."
                  name="sourceDirection"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Dropdown
                  options={directionsOptions}
                  placeholder="direction to..."
                  name="destinationDirection"
                />
              </FormGroup>
            </div>
            <FormGroup className="form-group">
              <Dropdown
                options={districtOptions}
                name="district"
                placeholder="district..."
              />
            </FormGroup>
            <FormGroup className="form-control">
              <Button buttonType="submit" value="search" />
            </FormGroup>
          </form>
          <SearchOutput className="search-output">
            <p>{avgWindSpeed} Km/hr</p>
          </SearchOutput>
        </div>
      </Wrapper>
    </AvgWindSpeedContainer>
  )
}

export default AverageWindSpeed
