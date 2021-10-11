import React,{useEffect} from 'react'
import {useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
    const {id} = useParams();
    useEffect(()=>{
        apiGet(`/shows/${id}?embeded[]=seasons&embed[]=cast`)
    },[id])
    return (
        <div>
            This is Show pages
        </div>
    )
}

export default Show;
