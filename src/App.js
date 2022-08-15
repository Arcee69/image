import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './components/Spinner';
import Content from './components/Content';

function App() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [text, setText] = useState('');

  const apiKey = `25363695-1709c4120f7c6a7b72b8d890c`;
  const fetchApi = async () => {
    setLoading(true)
    const url = await axios(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`);
    // console.log(url.data.hits);
    if(url) {
      setLoading(false);
      setItem(url.data.hits);  
    } 
  }

  const handleSearch = (e) => {    
    if(e.keyCode === 13) {
      setQuery(e.target.value);
    }
    console.log(e);   
  }

  useEffect(() => { 
    fetchApi(); 
  }, [query])

  return (
    <div className='container-none mx-3 w-full overflow-y-hidden'>
      <div className='flex flex-row w-3/4 justify-center'>
            <input type='text' 
                placeholder='Search Image' 
                className='placeholder-gray-200 mt-2 w-2/6 justify-center border-solid leading-tight focus:outline-black' 
                onKeyDown={handleSearch}
            />
        </div> 
        {loading && (<Spinner />)}
        {!!!loading && (<Content item={item} />)} 
    </div>
  );
}

export default App;
