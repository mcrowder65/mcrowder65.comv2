import React from "react"
import App from "src/app"
import { screen } from "@testing-library/react"
import { render } from "test/render"
test("it renders", async () => {
  render(<App />)
  await screen.findByText(/root page/i)
})
