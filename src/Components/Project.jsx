import React from 'react'
import youtube from '../assets/youtube.jpeg'
import weather from '../assets/weather.jpeg'
import netflex from '../assets/netflix.jpeg'

const Project = () => {
  return (
    <div className="projects flex flex-col justify-center items-center mt-10 gap-y-10">
      <div className="top flex flex-col justify-center items-center font-bold [&>p]:text-xl">
        <h1>Development Portfolio</h1>
        <p>&</p>
        <h1>Projects Gallery</h1>
      </div>
      <div className="bottom flex flex-row justify-center items-center gap-x-10">
        <div className="youtube flex flex-col gap-y-1 [&>p]:font-bold">
          <p>YouTube clone</p>
          <img src={youtube} className='rounded-lg h-46 w-80' />
          <div className="info text-xs">A functional clone of YouTube featuring video search, playback<br /> and category-based filtering using RapidAPI and React</div>
        </div>
        <div className="weather flex flex-col gap-y-1 [&>p]:font-bold">
          <p>Weather App</p>
          <img src={weather} className='rounded-lg h-46 w-80' />
          <div className="info text-xs">A responsive app that fetches real-time weather data using<br /> OpenWeather API. Built with React and styled for clean UI/UX.
          </div>
        </div>
        <div className="netflex flex flex-col gap-y-1 [&>p]:font-bold">
          <p>NetFlix clone</p>
          <img src={netflex} className='rounded-lg h-46 w-80' />
          <div className="info text-xs w-80"> A replica of Netflix with dynamic content rendering, movie posters, and smooth layout using TMDB API and React.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project