import React , {useState, useEffect} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/Player'
import data from './components/Utilits'
import Library from './components/Library'


function App() {

  const [songs, setSongs] = useState(data())
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong}  />
      <Player currentSong={currentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
