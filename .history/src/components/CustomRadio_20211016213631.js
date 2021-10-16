/* eslint-disable no-undef */
import React from 'react'

const CustomRadio = ({label , ...restProps}) => {
    return (
    <label htmlFor="shows-search">
        Shows
        <input {...restProps}
          type="radio"
          />
    </label>
    )
}

export default CustomRadio;
