'use strict'

import React, { PropTypes } from 'react'
import Comment from './comment'

// stateless component
const CommentList = (props) => {
  const commentNodes = props.data.map((comment, i) => {
    return (
      <Comment author={comment.author} key={i}>
        {comment.text}
      </Comment>
    )
  })

  return (
    <div className='comment-list'>
      {commentNodes}
    </div>
  )
}

CommentList.propTypes = {
  data: PropTypes.array.isRequired
}

export default CommentList
