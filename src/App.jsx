import React from 'react'
import Navbar from './components/navbar.jsx'
import Banner from './components/banner.jsx'
import Row from './components/row.jsx'
import './App.css'



const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={`${API_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`}
      />
      <Row
        title="Trending Now"
        fetchUrl={`${API_URL}/trending/all/week?api_key=${API_KEY}`}
      />
      <Row
        title="Top Rated"
        fetchUrl={`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`}
      />
      <Row
        title="Action Movies"
        fetchUrl={`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`}
      />
    </div>
  )
}

export default App
