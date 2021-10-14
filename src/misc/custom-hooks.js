import {useReducer ,useEffect} from 'react'
import ShowCard from '../components/show/ShowCard';

function showsReducer(prevStste,action){
    switch(action.type){
    case 'ADD':{
        return [...prevStste,action.showID]
    }
    case 'REMOVE':{
        return prevStste.filter((showID)=> showID !== action.showID);
    }
    default:
        return prevState ;
 }
}

function usePersistedReducer(reducer,initialstate,key){
    const [state,dispatch]=useReducer(reducer,initialstate,(initial)=>{
        const persisted = localStorage.getItem(key);

        return persisted? JSON.parse(persisted):initial;
        });

        useEffect(()=>{
            localStorage.setItem(key,JSON.stringify(state))
        },[state,key]);

        return[state,dispatch];
}

export useShows(key='show'){
    return usePersistedReducer(showsReducer,[],key)
}