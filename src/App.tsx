import { Provider } from "react-redux"
import "./App.css"
import Body from "./components/body"
import store from "./utilities/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Maincontainer from "./components/maincontainer"
import Watchpage from "./components/watchpage"

const approuter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Maincontainer />
      },
      {
        path: 'watch',
        element: <Watchpage />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={approuter} />
    </Provider>
  )
}

export default App
