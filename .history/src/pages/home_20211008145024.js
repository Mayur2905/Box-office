import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption,setSearchOption] = useState('shows');

  const isShowsSearch = searchOption==='shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const onRadioChange = (ev) =>{
    setSearchOption(ev.target.value)
  };
  console.log(searchOption);

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ?results.map(item => (
        <div key={item.show.id}>{item.show.name}</div>
      )) : results.map(item => (
        <div key ={item.person.id}>{item.person.name} </div>
      ));
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Searsch for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="Show-search">
          Shows
          <input id="shows-search" type="radio" 
          checked={isShowsSearch} value = "shows" onChange={onRadioChange}/>
        </label>
      
        <label htmlFor="Actors-search">
          Actors
          <input id="Actor-search"type="radio"
          checked={!isShowsSearch} value="people" onChange={onRadioChange}/>
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
