import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoding,setIsLoding] = useState(true);
  const [error,setError]= useState(null);

  useEffect(() => {

    let isMounted = true;
    
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(results => {

        if(isMounted){
        setShow(results);
        setIsLoding(false);
        }
      },2000);
    
    }).catch(err =>{
      if(isMounted){
      setError(err.message);
      setIsLoding(false);
      }
    });

    return()=>{
      isMounted=false;
    }

  }, [id]);

  console.log('show', show);
   // eslint-disable-next-line
  if(isLoding){
    return<div>Data is being loaded</div>
  }
  if(error)
  {
    return<div>Error Occured:{error}</div>
  }
  return <div>this is show page</div>;
};

export default Show;
