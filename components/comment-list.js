const React = require('react')
const Comment = require('./comment')

const CommentList = React.createClass({
  render() {
		const commentNodes = this.props.data.map((comment, i) => {
      return (
        <Comment author={comment.author} key={i}>
          {comment.text}
        </Comment>
      )
    })

    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    )
  }
})

module.exports = CommentList
