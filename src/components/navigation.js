import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { routeNames } from "src/routes"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { breakpoints } from "src/styles/breakpoints"
import { Drawer, IconButton } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"
import useDidUpdate from "src/hooks/use-did-update"

const linkCss = css`
  a {
    color: dodgerblue;
    text-decoration: none;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding: 0 24px;
  height: 100%;
  .active {
    color: purple;
  }
  ${linkCss};
`

const Navigation = (props) => {
  const location = useLocation()

  const [open, setOpen] = React.useState(false)
  useDidUpdate(location.pathname, () => {
    setOpen(false)
  })
  const links = (
    <React.Fragment>
      <NavLink exact activeClassName="active" to={routeNames.root}>
        Home
      </NavLink>
      <NavLink activeClassName="active" to={routeNames.finance}>
        Finance
      </NavLink>
      <NavLink activeClassName="active" to={routeNames.life}>
        Life
      </NavLink>
      <NavLink activeClassName="active" to={routeNames.fitness}>
        Fitness
      </NavLink>
      <NavLink activeClassName="active" to={routeNames.programming}>
        Programming
      </NavLink>
      <NavLink activeClassName="active" to={routeNames.about}>
        About
      </NavLink>
    </React.Fragment>
  )
  return (
    <Container>
      <header
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
          h1 {
            font-weight: normal;
          }
          button {
            display: none;
          }
          ${breakpoints(675)} {
            justify-content: space-between;
            button {
              display: flex;
            }
          }
        `}
      >
        <h1>Matt Crowder</h1>
        <IconButton aria-label="Menu" onClick={() => setOpen(true)}>
          <MenuOutlined />
        </IconButton>
        <div
          css={css`
            margin-left: 24px;
            ${breakpoints(675)} {
              display: none;
            }
            a {
              margin: 0 8px;
            }
          `}
        >
          {links}
        </div>
      </header>
      <div
        css={css`
          height: 100%;
        `}
      >
        {props.children}
      </div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div
          css={css`
            width: 200px;
            height: 100%;
            padding: 24px 8px;
            display: flex;
            flex-direction: column;
            ${linkCss};
            a {
              text-align: center;
              display: flex;
              align-items: center;
              height: 48px;
              //border: 1px solid lightgray;
            }
          `}
        >
          {links}
        </div>
      </Drawer>
    </Container>
  )
}

export default Navigation
