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
    <div className='w-full overflow-hidden'>
      <div className='flex flex-row w-3/3 border-slate-700 justify-center my-5'>
            <input 
                type='text' 
                placeholder=' Search Image' 
                className='placeholder-gray-200 mt-2 md:w-2/6 xs:w-4/6 justify-center h-10 leading-tight' 
                onKeyDown={handleSearch}
                style={{ border: "1px solid black"}}
            />
        </div> 
        {loading && (<Spinner />)}
        {!!!loading && (<Content item={item} />)} 
    </div>
  );
}

export default App;
