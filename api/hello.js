export default function handler(request, response) {
  console.log("hello")
  response.status(200).send({ message: "hello from the backend!" })
}
