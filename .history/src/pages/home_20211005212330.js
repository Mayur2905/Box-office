
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
    const [input , setInput ]= useState('');

    const onInputChange = (ev)=>{
        console.log(ev);
        input,setInput;
    };

    return (
        <MainPageLayout>
            <input type ="text" onChange={onInputChange}/>
        </MainPageLayout>
    );
};

export default Home;
