import React from "react"
import { useQuery } from "react-query"
import PropTypes from "prop-types"
import { getPosts } from "src/functions/get-posts"
import PostPreview from "src/components/post-preview"

const Posts = (props) => {
  const { data } = useQuery(props.queryKey, () =>
    getPosts({ keyword: props.category }),
  )
  return (
    <div>
      {data?.map((post, index) => (
        <PostPreview
          post={post}
          key={index}
          slug={props.slug(post.slug.current)}
        />
      ))}
    </div>
  )
}
Posts.propTypes = {
  slug: PropTypes.func.isRequired,
  queryKey: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}
export default Posts
