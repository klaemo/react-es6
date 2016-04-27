'use strict'

// "fetch" global
require('whatwg-fetch')

import React from 'react'
// import only the render function of react-dom using ES2015 destructuring
import { render } from 'react-dom'
import CommentBox from './components/comment-box'

render(
  <CommentBox url='/api/comments' pollInterval={2000} />,
  document.getElementById('content')
)
