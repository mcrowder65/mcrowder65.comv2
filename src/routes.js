import React from "react"
import { Route as _Route, Switch } from "react-router-dom"
import styled from "@emotion/styled"
import Navigation from "src/components/navigation"

const LazyRoot = React.lazy(() => import("src/pages/root/root"))
const LazyAbout = React.lazy(() => import("src/pages/about/about"))
const LazyFinance = React.lazy(() => import("src/pages/finance/finance"))
const LazyLife = React.lazy(() => import("src/pages/life/life"))
const LazyFitness = React.lazy(() => import("src/pages/fitness/fitness"))
const LazyProgramming = React.lazy(() =>
  import("src/pages/programming/programming"),
)
const LazyFitnessPost = React.lazy(() =>
  import("src/pages/fitness/fitness-post"),
)
const LazyFinancePost = React.lazy(() =>
  import("src/pages/finance/finance-post"),
)
export const routeNames = {
  root: "/",
  finance: "/finance",
  fitness: "/fitness",
  programming: "/programming",
  life: "/life",
  about: "/about",
  fitnessPost: (slug = ":slug") => `/fitness/${slug}`,
  financePost: (slug = ":slug") => `/finance/${slug}`,
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const Route = ({ component: Component, ...props }) => {
  return (
    <_Route
      {...props}
      component={() => (
        <React.Suspense fallback={null}>
          <Component />
        </React.Suspense>
      )}
    />
  )
}
const Routes = () => {
  return (
    <Container>
      <Navigation>
        <Switch>
          <Route path={routeNames.root} component={LazyRoot} exact />
          <Route path={routeNames.finance} component={LazyFinance} exact />
          <Route path={routeNames.fitness} component={LazyFitness} exact />
          <Route
            path={routeNames.fitnessPost()}
            component={LazyFitnessPost}
            exact
          />
          <Route
            path={routeNames.financePost()}
            component={LazyFinancePost}
            exact
          />
          <Route path={routeNames.life} component={LazyLife} exact />
          <Route path={routeNames.about} component={LazyAbout} exact />
          <Route
            path={routeNames.programming}
            component={LazyProgramming}
            exact
          />
        </Switch>
      </Navigation>
    </Container>
  )
}

export default Routes
