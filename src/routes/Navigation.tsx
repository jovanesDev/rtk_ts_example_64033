import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProductListContainer from "../pages/ProductListContainer"
import AppLayout from "./AppLayout"
import FavoritesListContainer from "../pages/FavoritesListContainer"

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ProductListContainer />} />
          <Route path="favorites" element={<FavoritesListContainer />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Navigation
