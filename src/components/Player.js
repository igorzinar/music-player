import React, {useRef, useState,} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faStepForward, faStepBackward} from '@fortawesome/free-solid-svg-icons'





const Player = ({audioRef, currentSong, isPlaying, setIsPlaying }) => {

   const playSongHandler = () => {
     
       if(isPlaying){
           audioRef.current.pause()
        setIsPlaying(!isPlaying)
       } else {
        audioRef.current.play()
        setIsPlaying(!isPlaying)
       }

    }
    const timeUpdateHandler = (e) => {
const current = e.target.currentTime
const duration = e.target.duration
setSongInfo({ ...songInfo, currentTime: current, duration })
    }

    const getTime = (time) => {
        return (
            Math.floor(time/60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
         audioRef.current.currentTime = e.target.value
        setSongInfo({ ...songInfo, currentTime:e.target.value })

    }
    // State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    return (
        <div className="player">

            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="play-prev" size="2x" icon={faStepBackward} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ?  faPause:faPlay } />
                <FontAwesomeIcon className="play-next" size="2x" icon={faStepForward} />
                
            </div>
            </div>
    )
}

export default Player

