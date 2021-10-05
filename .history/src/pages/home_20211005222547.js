// eslint-disable-next-line
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
    const [input , setInput ]= useState('');
    const[results, setResults] = useState(null);
    const onSearch =()=>
    {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json())
        .then(result => {
            setResults(result);
            console.log(result)
        });

    };

    const onInputChange = (ev)=>{
        setInput(ev.target.value);
    
    };
    const onKeyDown =(ev) => {
        if(ev.keyCode === 13){
            onSearch()
        }
    };
    const renderResults = () => {
        if(results && results.length === 0){
            return <div>No Result</div>
        }
        if(results && results.length>0){
            return <div>{results.map((item)=><div>{item.show.name}</div>)}</div>
        }
    };
    return (
        <MainPageLayout>
            <input type ="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
            <button type='button' onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
