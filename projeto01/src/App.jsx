import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Projects from "./components/pages/Projects"

import Container from "./components/layout/Container"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Categoiras from "./components/pages/Categorias"
import AddCategorias from "./components/pages/form/AddCategorias"
import EditCategoria from "./components/pages/form/EditCategoria"
import EditProject from "./components/project/FormEditProject"

function App() {


  return (
    <BrowserRouter>

      <NavBar />

      <Container customClass="min-height">
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/categorias" element={<Categoiras />}></Route>
          <Route path="/categorias/add" element={<AddCategorias />}></Route>
          <Route path="/categorias/editar/:id" element={<EditCategoria />}></Route>
          <Route path="/projects/editar/:id" element={<EditProject />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>
          <Route path="/projects" element={<Projects />}
          ></Route>

        </Routes>
      </Container>

      <Footer />

    </BrowserRouter>
  )
}

export default App
