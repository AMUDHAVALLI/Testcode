import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Landing from "./pages/landing"
import CarDetail from "./pages/cardetail"

function App() {
  // initialize a browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/CarDetail",
      element: <CarDetail />,
    },
    // other pages....
    // {
    //   path: "/about",
    //   element: <About />,
    // },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App