// "fetch" global
require('whatwg-fetch')

const React = require('react')
const CommentBox = require('./components/comment-box')

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
)
