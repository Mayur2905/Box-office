/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import React ,{useState,useEffect}from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';


const Started = () => {
    const [starred]=useShows();

    const [shows,setShows]=useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const[error,setError]=useState(null);
    useEffect(() => {
        if(starred && starred.length >0){
            const promises = starred.map(showId => apiGet(`/shows/${showId}`))
            Promise.all(promises).then(results =>
                {
                    console.log('results',results);
                })

        }else{
            setIsLoading(false);
        }
    }, [starred]) 
    return (
        <MainPageLayout>
            This is started
        </MainPageLayout>
    )
}

export default Started;
