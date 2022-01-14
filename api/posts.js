import _sanityClient from "@sanity/client"

const sanityClient = _sanityClient({
  projectId: "rsee6t0b",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
})
export default async function handler(request, response) {
  const posts = await sanityClient.fetch(
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
    { keyword: request.query.keyword },
  )
  response.status(200).send({ posts })
}
