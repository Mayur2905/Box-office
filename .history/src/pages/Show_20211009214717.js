import React from 'react'
import {useParams } from 'react-router-dom';

const Show = () => {
    const params = useParams();
    console.log('params',params)
    return (
        <div>
            This is Show pages
        </div>
    )
}

export default Show;
