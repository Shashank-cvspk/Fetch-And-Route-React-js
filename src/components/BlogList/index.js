// Write your JS code here

import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {list} = props
  return (
    <ul className="List">
      {list.map(each => (
        <BlogItem key={each.id} detail={each} />
      ))}
    </ul>
  )
}

export default BlogList
