import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout";
import UsuarioPage from "./pages/UsuarioPage";
import UsuarioDetalles from "./pages/UsuarioDetalles"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout><UsuarioPage/> </MainLayout>}/>
        <Route path="/detalles/:usuarioId" element={<MainLayout> <UsuarioDetalles/> </MainLayout>}/>
    </Routes>
  )
}

export default Router