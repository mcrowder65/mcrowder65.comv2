export const getPosts = ({ keyword }) => {
  return fetch(`/api/posts?keyword=${keyword}`)
    .then((result) => result.json())
    .then((result) => result.posts)
}
