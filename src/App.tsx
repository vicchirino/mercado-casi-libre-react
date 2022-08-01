import React from "react"
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query"
import styled from "styled-components"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Fetching from "./components/Fetching"
import { ErrorBoundary } from "react-error-boundary"
import Error from "./components/Error"

const ItemsPage = React.lazy(() => import("./pages/ItemsPage"))
const ItemPage = React.lazy(() => import("./pages/ItemPage"))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => {
              return (
                <div>
                  <Error />
                  <Button onClick={() => resetErrorBoundary()}></Button>
                </div>
              )
            }}
          >
            <BrowserRouter>
              <Header>
                <Title>
                  <Link to="/">Items</Link>
                </Title>
              </Header>
              <Main>
                <React.Suspense fallback={<Fetching />}>
                  <Routes>
                    <Route path="/" element={<ItemsPage />} />
                    <Route path="/item/:id" element={<ItemPage />} />
                  </Routes>
                </React.Suspense>
              </Main>
            </BrowserRouter>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  font-weight: 2;
`

const Title = styled.h1`
  font-weight: 200;
  margin: 0;
`

const Main = styled.main`
  padding: 0 20px;
  background-color: yellow;
`
const Button = styled.button`
  display: block;
  border: none;
  padding: 1rem 2rem;
  margin: auto;
  text-decoration: none;
  background: orange;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export default App
