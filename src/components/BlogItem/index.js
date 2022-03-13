// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {detail} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = detail

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="list-item">
        <div>
          <img src={imageUrl} className="logo-blog" alt="logo-blog" />
        </div>
        <div className="matter">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author">
            <img src={avatarUrl} className="avatar" alt="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
