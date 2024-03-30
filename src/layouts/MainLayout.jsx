import { Outlet } from "react-router-dom"
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'

const MainLayout = () => {
  return (
    <>
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout
