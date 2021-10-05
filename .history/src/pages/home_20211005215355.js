// eslint-disable-next-line
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
    const [input , setInput ]= useState('');

    const onInputChange = (ev)=>{
        setInput(ev.target.value);
    
    };
    const onKeyDown =(ev) => {
        console.log(ev.keyCode);
    }
    const onSearch =()=>
    {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json())
        .then(result => {
            console.log(result)
        });

    };

    return (
        <MainPageLayout>
            <input type ="text" onChange={onInputChange} onKeyDown={} value={input}/>;
            <button type='button' onClick={onSearch}>Search</button>
        </MainPageLayout>
    );
};

export default Home;
