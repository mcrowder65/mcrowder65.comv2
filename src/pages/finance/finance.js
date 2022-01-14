import React from "react"
import { routeNames } from "src/routes"
import Posts from "src/components/posts"

const Finance = () => {
  return (
    <Posts
      slug={routeNames.financePost}
      queryKey="finance"
      category="Finance"
    />
  )
}

export default Finance
