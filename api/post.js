import _sanityClient from "@sanity/client"

const sanityClient = _sanityClient({
  projectId: "rsee6t0b",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
})
export default async function handler(request, response) {
  const post = await sanityClient.fetch(
    `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
    { slug: request.query.slug },
  )

  response.status(200).send({ post: post[0] })
}
