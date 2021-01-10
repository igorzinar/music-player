import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faStepForward, faStepBackward} from '@fortawesome/free-solid-svg-icons'





const Player = () => {
    return (
        <div className="player">

            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="play-prev" size="2x" icon={faStepBackward} />
                <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="play-next" size="2x" icon={faStepForward} />
                
            </div>
        </div>
    )
}

export default Player

