import React from "react"
import { useParams } from "react-router-dom"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import { css } from "@emotion/react"
import { sanityClient } from "src/providers"
import { useQuery } from "react-query"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Post = () => {
  const { slug } = useParams()
  const api = useQuery(slug, () =>
  fetch(`/api/post?slug=${slug}`)
    .then((result) => result.json())
    .then((result) => result.post)
  )
  const postData = api.data
  if (!postData) {
    return null
  }
  return (
    <div
      css={css`
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>
        <h2>{postData.title}</h2>
        <div>
          <h4>{postData.name}</h4>
        </div>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  )
}

export default Post
