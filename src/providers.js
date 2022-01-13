import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import theme from "src/theme"
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { QueryClientProvider, QueryClient } from "react-query"
const queryClient = new QueryClient()
const muiTheme = createTheme()
const Providers = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={muiTheme}>
          <BrowserRouter>{props.children}</BrowserRouter>
        </ThemeProvider>
      </EmotionThemeProvider>
    </QueryClientProvider>
  )
}

export default Providers
