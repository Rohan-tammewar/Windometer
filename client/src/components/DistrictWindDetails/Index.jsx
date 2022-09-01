import React, { useEffect, useState } from 'react'
import {
  createDistrictOptions,
  directionsOptions,
  getDistrictList,
  saveDistrictWindData,
} from '../../data'
import Button from '../Utilities/Button'
import Dropdown from '../Utilities/Dropdown'
import Heading from '../Utilities/Heading'
import Wrapper from '../wrapper'
import { FormGroup, Input, Label } from '../Utilities/Form/Form.styled'
import WindDetailsContainer from './DistrictWindDetails.styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DistrictWindDetails = () => {
  const [resMessage, setResMessage] = useState('')
  const notify = (message) => toast(message)

  const onDistrictWindDetailsSubmit = (e) => {
    e.preventDefault()
    const details = new FormData(e.target)

    const responseData = {
      district: details.get('district'),
      speed: details.get('speed'),
      sourceDirection: details.get('sourceDirection'),
      destinationDirection: details.get('destinationDirection'),
      date: details.get('datetime'),
      latitude: details.get('latitude'),
      longitude: details.get('longitude'),
    }
    const message = saveDistrictWindData(responseData)
    message.then((res) => {
      setResMessage(res.responseMessage)
      notify(res.responseMessage)
    })
  }

  const [districtOptions, setDistrictOptions] = useState('')

  useEffect(() => {
    getDistrictList().then((result) => {
      setDistrictOptions(createDistrictOptions(result.data))
    })
  }, [])

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
            <Dropdown
              options={districtOptions}
              placeholder="district"
              name="district"
            />
          </FormGroup>
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
          <FormGroup className="form-group">
            <Label htmlFor="datetime">Date & Time</Label>
            <Input
              type="datetime-local"
              placeholder="in yyyy-mm-dd hh:mm:ss"
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
            <ToastContainer />
          </FormGroup>
        </form>
      </Wrapper>
    </WindDetailsContainer>
  )
}

export default DistrictWindDetails
