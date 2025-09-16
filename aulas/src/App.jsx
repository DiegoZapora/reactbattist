import { useState } from 'react'
import './App.css'
import Hello from './components/Card/Hello'
import Evento from './components/Eventos/Evento'
import Form from "./components/Eventos/Form"
import RendList from './components/Listas/RendList'
import Condicional from './components/Rend/Condicional'
import Nome from './components/State/Nome'
import Saudacao from './components/State/Saudacao'

function App() {

  const [nome, setNome] = useState()

  return (
    <section>
      <Nome setNome={setNome} /> <br />
      <Saudacao nome={nome}/>
    </section>
  )

}

export default App