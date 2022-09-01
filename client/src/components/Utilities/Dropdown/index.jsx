import React, { useEffect, useState } from 'react'

import ReactSelect from 'react-select'
import { StyledSelect } from './Dropdown.styled'

const Dropdown = ({ name, options, placeholder }) => {
  const [selectValue, setSelectValue] = useState('')

  const filterChangeHandler = (e) => {
    console.log(e)
  }

  return (
    <StyledSelect>
      <ReactSelect
        onChange={filterChangeHandler}
        options={options}
        name={name}
        isSearchable={false}
        className={`value-select`}
        classNamePrefix="value-select"
        defaultValue="All"
        placeholder={placeholder}
        value={
          Array.isArray(options)
            ? options.find((obj) => obj.value === selectValue)
            : selectValue
        }
      />
    </StyledSelect>
  )
}

export default Dropdown
