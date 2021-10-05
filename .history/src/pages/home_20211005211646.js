import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
    const [ ]= useState('');

    const onInputChange = (ev)=>{
        console.log(ev);
    };

    return (
        <MainPageLayout>
            <input type ="text" onChange={onInputChange}/>
        </MainPageLayout>
    );
};

export default Home;
