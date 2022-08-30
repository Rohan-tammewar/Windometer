import React, { useState } from 'react'
import { directionsOptions } from '../../data'
import Button from '../Utilities/Button'
import Dropdown from '../Utilities/Dropdown'
import Heading from '../Utilities/Heading'
import Wrapper from '../wrapper'
import { FormGroup, Input, Label } from '../Utilities/Form/Form.styled'
import WindDetailsContainer from './DistrictWindDetails.styled'

const DistrictWindDetails = () => {
  const onDistrictWindDetailsSubmit = (e) => {
    e.preventDefault()
    console.log('e')
    const details = new FormData().entries()
  }

  const [dateTime, setDateTime] = useState('')

  return (
    <WindDetailsContainer className="wind-details">
      <Wrapper>
        <Heading className="heading" heading="Add Wind Details" />

        <form action="post" onSubmit={(e) => onDistrictWindDetailsSubmit(e)}>
          <FormGroup className="form-group">
            <Label htmlFor="speed">Speed</Label>
            <Input
              type="number"
              placeholder="in km/hr"
              name="speed"
              title="speed"
            />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="datetime">District name</Label>
            <Input type="text" name="district" title="district" />
          </FormGroup>
          <div className="form-inline-group">
            <FormGroup className="form-group">
              <Dropdown
                options={directionsOptions}
                placeholder="directions from..."
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Dropdown
                options={directionsOptions}
                placeholder="directions to..."
              />
            </FormGroup>
          </div>
          <FormGroup className="form-group">
            <Label htmlFor="datetime">Date & Time</Label>
            <Input
              type="text"
              placeholder="in dd-mm-yyyy hh:mm:ss"
              name="datetime"
              title="datetime"
            />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="latitude">Latitude</Label>
            <Input type="number" name="latitude" title="latitude" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="longitude">Longitude</Label>
            <Input type="number" name="longitude" title="longitude" />
          </FormGroup>
          <FormGroup className="form-control">
            <Button buttonType="submit" value="add" />
          </FormGroup>
        </form>
      </Wrapper>
    </WindDetailsContainer>
  )
}

export default DistrictWindDetails
