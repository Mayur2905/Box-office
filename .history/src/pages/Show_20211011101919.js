import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoding,setIsLoding] = useState(true);
  const [error,setError]= useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(results => {
      setShow(results);
      setIsLoding(false)
    }).catch(err =>{
      setError(err.message);
      setIsLoding(false);
    });

  }, [id]);

  console.log('show', show);
  if(isLoding){
    return<div>Date is being loaded</div>
  }
  if(error)
  {
    return<div>Error Occured:{error}</div>
  }
  return <div>this is show page</div>;
};

export default Show;
