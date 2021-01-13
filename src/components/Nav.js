import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Playlist
        <FontAwesomeIcon icon={faMusic} />
      </button>
      <h1>Player</h1>
    </nav>
  )
}

export default Nav

{
  /* <div className="img-wrap">
      <p className="img-description">Playlist</p>
      <img className="logo-image" src="../icon.png" alt="logo" />
       Playlist
        <FontAwesomeIcon icon={faMusic} />
    </div> */
}
