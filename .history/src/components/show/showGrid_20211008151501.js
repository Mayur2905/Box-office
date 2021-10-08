import React from 'react'
import showCard from './showCard'
import not-found from '../../../images/not-found.png'
const ShowGrid = ({data}) => {
    return (
        <div>  
            {
                data.map(({show})=> <showCard key={show.id} id ={show.id} name ={show.name} image={show.image ? show.image.medium :}/>)
            } 
        </div>
    )
}

export default showGrid;
