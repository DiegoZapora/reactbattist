import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"

import Container from "./components/layout/Container"

function App() {


  return (
    <BrowserRouter>

      <Container customClass="min-height">
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>

        </Routes>
      </Container>

    </BrowserRouter>
  )
}

export default App
