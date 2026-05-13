import { RouterProvider } from "react-router-dom"
import { appRouter } from "./app.router"

export const TesloShopApp = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}
