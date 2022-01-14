import React from "react"
import { routeNames } from "src/routes"
import Posts from "src/components/posts"

const Fitness = () => {
  return (
    <Posts
      slug={routeNames.fitnessPost}
      queryKey="fitness"
      category="Fitness"
    />
  )
}

export default Fitness
