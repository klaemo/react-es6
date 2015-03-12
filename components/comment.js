const React = require('react')
const marked = require('marked')

const Comment = React.createClass({
  render() {
		const rawMarkup = marked(this.props.children.toString())
    return (
      <div className="comment">
        <h2 className="comment-author">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    )
  }
})

module.exports = Comment
