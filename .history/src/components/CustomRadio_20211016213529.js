/* eslint-disable no-undef */
import React from 'react'

const CustomRadio = ({label , ...restProps}) => {
    return (
    <label htmlFor="shows-search">
        Shows
        <input
          id="shows-search"
          type="radio"
          value="shows"
          checked={isShowsSearch}
          onChange={onRadioChange}
          />
    </label>
    )
}

export default CustomRadio;
