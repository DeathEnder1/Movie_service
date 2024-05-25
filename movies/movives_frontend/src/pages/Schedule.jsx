import React, {useState, useEffect} from 'react'
import './Schedule.css';
import Card from '../components/Card';

function Schedule() {
    const [data, setData] = useState([])
    const [movies, setMovies] = useState([])

    const fetchData = () => {
        fetch('http://localhost:8080/movies')
        .then(res=>res.json())
        .then(data => setData(data))
        .catch(e=>console.log(e.message));
      };
    
      useEffect(()=>{
        fetchData();
      }, []);

    useEffect(()=>{
        setMovies(data);
    });

  return (
    <section id="schedule" className='schedule'>
        <div className="container-fuild">
            <div className="row">
                <h4 className='section-tittle'>Opening this week</h4>
            </div>
            <div className="row">
                <div className="filters">
                    <p>Filters</p>
                </div>
            </div>
            <div className="row mt-5">
                {movies && movies.length>0 && movies.map(movie =>(<Card key={movie._id} movie={movie} />))}
            </div>
        </div>
    </section>
  );
}

export default Schedule