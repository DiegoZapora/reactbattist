import './App.css'
import Hello from './components/Hello'
import Walter from './components/Walter'
import aurora from './assets/aurora.jpg'
import andre from "./assets/300.png"
import Andre from "./components/Andre"

function App() {

  return (
    <section>
      <Hello/>
      <Walter name="Andre" age="47" occupation="Jogador de Samp" img={aurora}/>
      <Walter name="Samp" age="28" occupation="Jogador de Samp" img={andre}/>
      <Andre />
    </section>
  )

}

export default App