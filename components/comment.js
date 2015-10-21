'use strict'

import React, { PropTypes } from 'react'
import marked from 'marked'

// stateless component
const Comment = (props) => {
  const rawMarkup = marked(props.children.toString())
  return (
    <div className='comment'>
      <h2 className='comment-author'>{props.author}</h2>
      <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    </div>
  )
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string
}

export default Comment
