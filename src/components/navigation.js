import React from "react"
import { Link, useLocation } from "react-router-dom"
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
  height: 100%;
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
      <Link to={routeNames.root}>Home</Link>
      <Link to={routeNames.finance}>Finance</Link>
      <Link to={routeNames.life}>Life</Link>
      <Link to={routeNames.fitness}>Fitness</Link>
      <Link to={routeNames.programming}>Programming</Link>
    </React.Fragment>
  )
  return (
    <Container>
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
      <div
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
          ${breakpoints(618)} {
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
            ${breakpoints(618)} {
              display: none;
            }
            a {
              margin: 0 8px;
            }
          `}
        >
          {links}
        </div>
      </div>
      <div
        css={css`
          height: 100%;
        `}
      >
        {props.children}
      </div>
    </Container>
  )
}

export default Navigation
