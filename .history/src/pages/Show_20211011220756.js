import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { apiGet } from '../misc/config';


const reducer =(prevState,action)=>{
  switch(action.type){
    case 'FETCH_SUCCESS0':{
      return{isLoding:false,error:null,show:action.show}
    }
    case 'FATCH_FAILED':{
      return {...prevState,isLoding:false,error:action.error}
    }
    default:return prevState
  }
}
const initialState ={
  show : null,
  isLoding:true,
  error:null
}
const Show = () => {
  const { id } = useParams();
  const [{show,isLoding,error},dispatch]=useReducer(reducer,initialState);
  useEffect(() => {

    let isMounted = true;
    
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(results => {

        if(isMounted){
          dispatch({type :'FETCH_SUCCESS',show:results})
        }
    
    }).catch(err =>{
      if(isMounted){
        dispatch({type :'FETCH_FAILED',show:err.message})
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
  return <div><ShowMainData/>
    <div>
      <h2>Details</h2>
      <Details/>
    </div>
    <div> 
      <h2>Seasons</h2>
      <Seasons/>
    </div>
    <div>
      <h2>Cast</h2>
      <Cast/>
    </div>
  </div>;
 };

export default Show;
