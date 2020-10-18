import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Hi! I'm no longer taking freelance work.
          <a href="https://twitter.com/rosethekatie">
            {' '}
            Follow me on Twitter to see what I'm up to now.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
