import { sanityClient } from "src/providers"

export const getPosts = ({ keyword }) => {
  return sanityClient.fetch(
    `*[_type == "post" && $keyword in categories[]->title]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`,
    { keyword },
  )
}
