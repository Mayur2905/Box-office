import React from 'react'
import Navs from './Navs'

const MainPageLayout = ({children}) => {
    return (
        <div>
            <Navs/>
            {children}
        </div>
    )
}

export default MainPageLayout
