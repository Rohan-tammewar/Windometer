import React, { useState } from 'react'
import { directionsOptions } from '../../data';
import Button from '../Utilities/Button';
import Dropdown from '../Utilities/Dropdown';
import Heading from '../Utilities/Heading';
import Wrapper from '../wrapper';
import { FormGroup, Input, Label } from '../Utilities/Form/Form.styled';

const DistrictDetails = () => {

    const onDistrictDetailsSubmit = (e) => {
        e.preventDefault();
        console.log('e');
        const details = new FormData().entries();
    }

    const [dateTime, setDateTime] = useState('');


    return (
        <section className='district-details'>
            <Wrapper>
                <Heading className='heading' heading='Add District Details' />
                <form action="post" onSubmit={(e) => onDistrictDetailsSubmit(e)}>
                    <FormGroup className="form-group">
                        <Label htmlFor="districtname">District Name</Label>
                        <Input type="text" name='districtname' title='district name' />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label htmlFor="coords">Co-ordinates for district</Label>
                        <Input type="number" placeholder='x1y1' name='coordsx' title='coordsx' />
                        <Input type="number" placeholder='x2y2' name='coordsy' title='coordsy' />
                        <Input type="number" placeholder='x3y3' name='coordsy' title='coordsy' />
                        <Input type="number" placeholder='x4y4' name='coordsy' title='coordsy' />
                    </FormGroup>
                    <FormGroup className="form-control">
                        <Button buttonType="submit" value='add' />
                    </FormGroup>
                </form>
            </Wrapper >
        </section>
    )
}

export default DistrictDetails;