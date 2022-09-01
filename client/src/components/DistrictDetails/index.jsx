import React, { useState } from 'react'
import { directionsOptions, saveDistrictData } from '../../data'
import Button from '../Utilities/Button'
import Dropdown from '../Utilities/Dropdown'
import Heading from '../Utilities/Heading'
import Wrapper from '../wrapper'
import { FormGroup, Input, Label } from '../Utilities/Form/Form.styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DistrictDetails = () => {
  const notify = (message) => toast(message)
  const onDistrictDetailsSubmit = (e) => {
    e.preventDefault()
    const details = new FormData(e.target)

    const responseData = {
      name: details.get('districtname'),
      coordinates: `${details.get('coordsx1y1')},${details.get(
        'coordsx2y2',
      )},${details.get('coordsx3y3')},${details.get('coordsx4y4')}`,
    }
    const message = saveDistrictData(responseData)

    message.then((res) => {
      notify(res.responseMessage)
    })
  }

  // const handleCoordsValidation = (e) => {
  //   console.log(e.target.value)
  //   if (!e.target.value.match(/^([0-9]+\s*\,\s*[0-9]+)$/g)) {
  //     notify('Invalid format for co-ordinates')
  //   }
  // }

  return (
    <section className="district-details">
      <Wrapper>
        <Heading className="heading" heading="Add District Details" />
        <form action="post" onSubmit={(e) => onDistrictDetailsSubmit(e)}>
          <FormGroup className="form-group">
            <Label htmlFor="districtname">District Name</Label>
            <Input type="text" name="districtname" title="district name" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="coords">Co-ordinates for district</Label>
            <Input
              type="text"
              placeholder="x1,y1"
              name="coordsx1y1"
              title="coordsx1y1"
              // onChange={handleCoordsValidation}
            />
            <Input
              type="text"
              placeholder="x2,y2"
              name="coordsx2y2"
              title="coordsx2y2"
              // onChange={handleCoordsValidation}
            />
            <Input
              type="text"
              placeholder="x3,y3"
              name="coordsx3y3"
              title="coordsx3y3"
              // onChange={handleCoordsValidation}
            />
            <Input
              type="text"
              placeholder="x4,y4"
              name="coordsx4y4"
              title="coordsx4y4"
              // onChange={handleCoordsValidation}
            />
          </FormGroup>
          <FormGroup className="form-control">
            <Button buttonType="submit" onClick={null} value="add" />
            <ToastContainer />
          </FormGroup>
        </form>
      </Wrapper>
    </section>
  )
}

export default DistrictDetails
