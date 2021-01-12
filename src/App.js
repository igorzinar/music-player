import React , {useState, useEffect, useRef} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/Player'
import data from './components/Utilits'
import Library from './components/Library'


function App() {
// Ref 
const audioRef = useRef(null)


  const [songs, setSongs] = useState(data())
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
 <Library songs={songs} setCurrentSong={setCurrentSong}/> 
      <div className='wrap-player'>
         <Song currentSong={currentSong}/>          
      <Player
       currentSong={currentSong} 
       setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        audioRef={audioRef}
        />
      <div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
      </div>
     
     
    </div>
  );
}

export default App;
