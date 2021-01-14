import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        // className={`${libraryStatus ? 'active' : ''}`}
      >
        Playlist
        <FontAwesomeIcon icon={faMusic} />
      </button>
      <h1>Player</h1>
    </nav>
  )
}

export default Nav
