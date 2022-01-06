import React from "react"
import { ThemeProvider } from "@emotion/react"
import theme from "src/theme"
import { BrowserRouter } from "react-router-dom"
const Providers = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </ThemeProvider>
  )
}

export default Providers
