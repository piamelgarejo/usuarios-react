import "./MainLayout.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = ({children}) => {
  return (
    <div className="main-layout" >
        <header>
            <Navbar/>
        </header>

        <main className="container mx-auto p-6">
            {children}
        </main>

        <Footer/>
    </div>
  )
}

export default MainLayout