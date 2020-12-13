import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
// import Search from './Search';
import Movie from './Movie';
import './appStyle.css';




const App = () => {
    
    const [data, setData] = useState({});
    const [q, setQ] = useState('');
    const [url, setUrl] = useState('https://www.omdbapi.com/?apikey=e4db3ced&t=$searchValue');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setData(result.data);
            
        };
        fetchData(data);
        console.log(data);
    }, [url]);

    {
        return (
            <Fragment>
                <input type="text" placeholder="Seacrh movie" value={q} onChange={event => setQ(event.target.value)}></input>
                <button type="button" onClick={() => setUrl(`https://www.omdbapi.com/?apikey=e4db3ced&t=${q}`)}>Search</button>
                <div>
                    
                <Movie>
                        {this.data.map((post => (
                            <div key={`${q}`}>
                                <h2>{post.Title}</h2>
                        </div>
                    )))}
                        
                </Movie>
                    
                 
                </div>
            </Fragment>
        )
    
        
    


  

    }
}

export default App
