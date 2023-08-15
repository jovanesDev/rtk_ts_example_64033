/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import CustomSpinner from "../shared/CustomSpinner"
import { useEffect } from "react"
import { getAllFavorites, getAllProducts } from "../features/aplication/appApi"
import { useAppDispatch, useAppSelector } from "../app/hooks"
const AppLayout = () => {
  const dispatch = useAppDispatch()

  const { loading } = useAppSelector((store) => store.app)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllFavorites())
    return () => {}
  }, [])

  return (
    <div>
      <Navbar />
      {loading ? <CustomSpinner /> : <Outlet />}
    </div>
  )
}

export default AppLayout
