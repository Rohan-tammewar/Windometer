import React, { useEffect, useState } from 'react'
import {
  directionsOptions,
  getDistrictList,
  createDistrictOptions,
} from '../../data'
import Button from '../Utilities/Button'
import Dropdown from '../Utilities/Dropdown'
import Heading from '../Utilities/Heading'
import Wrapper from '../wrapper'
import { FormGroup, Input, Label } from '../Utilities/Form/Form.styled'
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled'
import AvgWindSpeedContainer from './AvgWindSpeed.styled'

const AverageWindSpeed = () => {
  const onAvgWindSpeedDetailsSubmit = (e) => {
    e.preventDefault()
    console.log('e')
    const details = new FormData().entries()
  }

  useEffect(() => {
    getDistrictList().then((result) => {
      //   console.log(result.data)
      setDistrictOptions(createDistrictOptions(result.data))
      setDistrictList(result.data)
    })
  }, [])

  const [districtList, setDistrictList] = useState('')

  //   console.log(districtList)

  const [districtOptions, setDistrictOptions] = useState('')

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
                  type="text"
                  placeholder="in dd-mm-yyyy hh:mm:ss"
                  name="datetime"
                  title="datetime"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label htmlFor="datetime">Date & Time To...</Label>
                <Input
                  type="text"
                  placeholder="in dd-mm-yyyy hh:mm:ss"
                  name="datetime"
                  title="datetime"
                />
              </FormGroup>
            </div>
            <div className="form-inline-group">
              <FormGroup className="form-group">
                <Dropdown
                  options={directionsOptions}
                  placeholder="direction from..."
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Dropdown
                  options={directionsOptions}
                  placeholder="direction to..."
                />
              </FormGroup>
            </div>
            <FormGroup className="form-group">
              <Dropdown options={districtOptions} placeholder="district..." />
            </FormGroup>
            <FormGroup className="form-control">
              <Button buttonType="submit" value="search" />
            </FormGroup>
          </form>
          <SearchOutput className="search-output">
            <p>53 Km/hr</p>
          </SearchOutput>
        </div>
      </Wrapper>
    </AvgWindSpeedContainer>
  )
}

export default AverageWindSpeed
