const React = require('react')
const CommentList = require('./comment-list')
const CommentForm = require('./comment-form')

const CommentBox = React.createClass({
	getInitialState() {
    return { data: [] }
  },

  loadComments() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.error(this.props.url, err.toString()))
  },

  componentDidMount() {
		this.loadComments()
    setInterval(this.loadComments, this.props.pollInterval)
  },

  handleCommentSubmit(comment) {
    const comments = this.state.data
    const newComments = comments.concat([ comment ])

    this.setState({ data: newComments })

    fetch(this.props.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(data => this.setState({ data: data }))
    .catch(err => console.error(this.props.url, err.toString()))
  },

  render() {
    return (
      <div className="comment-box">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
})

module.exports = CommentBox
