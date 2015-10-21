// "fetch" global
require('whatwg-fetch')

const React = require('react')
// import only the render function of react-dom using ES2015 destructuring
const { render } = require('react-dom')

const CommentBox = require('./components/comment-box')

render(
  <CommentBox url='comments.json' pollInterval={2000} />,
  document.getElementById('content')
)
