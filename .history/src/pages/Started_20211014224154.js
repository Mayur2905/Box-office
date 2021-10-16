import React from 'react'
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';


const Started = () => {
    const [starred]=uaeShows()

    conat [useShows,setShows]=useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const[error,setError]=useState(null);
    useEffect(() => {
        if(starred && starred.length >0){
            const promises = starred.map(showId => apiGet())
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
