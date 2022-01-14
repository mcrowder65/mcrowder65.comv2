import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import theme from "src/theme"
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { QueryClientProvider, QueryClient } from "react-query"
import _sanityClient from "@sanity/client"

export const sanityClient = _sanityClient({
  projectId: "rsee6t0b",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
})
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
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
