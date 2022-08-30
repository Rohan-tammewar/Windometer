import React from 'react'
import { directionsOptions } from '../../data';
import ProbableWindFlowContainer from './Forecast.styled';
import Button from '../Utilities/Button';
import Dropdown from '../Utilities/Dropdown';
import { FormGroup } from '../Utilities/Form/Form.styled';
import Heading from '../Utilities/Heading';
import SearchOutput from '../Utilities/SearchOutput/SearchOutput.styled';
import Wrapper from '../wrapper';

const Forecast = () => {

    const onWindFlowSubmit = (e) => {
        e.preventDefault();
        console.log('e');
        const details = new FormData().entries();
    }

    return (
        <div>
            <ProbableWindFlowContainer className='probable-wind-details'>
                <Wrapper>
                    <Heading className='heading' heading='Probable wind flow in a specific time' />
                    <form action="post" onSubmit={(e) => onWindFlowSubmit(e)}>
                        <div className='form-inline-group'>
                            <FormGroup className="form-group">
                                <Dropdown options={directionsOptions} placeholder='directions from...' />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Dropdown options={directionsOptions} placeholder='directions to...' />
                            </FormGroup>
                        </div>
                        <FormGroup className="form-control">
                            <Button buttonType="submit" value='check' />
                        </FormGroup>
                    </form>
                    <div className="max-entries-occurences">
                        <div className="search-details">
                            <SearchOutput className="search-output"><p>South-North : 15</p></SearchOutput>
                        </div>
                    </div>
                </Wrapper >
            </ProbableWindFlowContainer>
        </div>
    )
}

export default Forecast;