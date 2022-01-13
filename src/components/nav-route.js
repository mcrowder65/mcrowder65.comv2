import React from "react"
import { Route } from "react-router-dom"
import styled from "@emotion/styled"

const Navigation = styled.div`
  padding: 24px;
  margin: 24px;
`
const NavRoute = (props) => {
  return (
    <Navigation>
      <Route {...props} />
    </Navigation>
  )
}

export default NavRoute
