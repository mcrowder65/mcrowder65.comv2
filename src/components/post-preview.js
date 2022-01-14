import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
const PostPreview = (props) => {
  return (
    <Link to={props.slug}>
      <h2>{props.post.title}</h2>
    </Link>
  )
}

PostPreview.propTypes = {
  slug: PropTypes.string,
  post: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
    mainImage: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
}
export default PostPreview
