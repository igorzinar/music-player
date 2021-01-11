import React , {useState, useEffect} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/Player'
import data from './components/Utilits'


function App() {

//   const [songs, setSongs] = useState(data())
// const [currentSong, setCurrentSong] = useState(songs.map(song => `<div>song</div>`))
// console.log(currentSong)

  return (
    <div className="App">
      <Song/>
      <Player/>
      
    </div>
  );
}

export default App;
