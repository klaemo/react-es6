const React = require('react')

const CommentForm = React.createClass({
	handleSubmit(e) {
    e.preventDefault()
    const author = React.findDOMNode(this.refs.author).value.trim()
    const text = React.findDOMNode(this.refs.text).value.trim()

    if (!text || !author) {
      return
    }

    // TODO: send request to the server
    this.props.onCommentSubmit({ author: author, text: text })
    React.findDOMNode(this.refs.author).value = ''
    React.findDOMNode(this.refs.text).value = ''
    return
  },

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    )
  }
})

module.exports = CommentForm
