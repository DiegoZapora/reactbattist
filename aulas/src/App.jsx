import './App.css'
import Hello from './components/Hello'

function App() {

  const name = "Andre Matos"
  const upperName = name.toUpperCase()
  const sum = (a,b) => {
    return a+b
  }

  return (
    <section>
      <h1>{upperName}</h1>
      <p><Hello/></p>
      <small>{sum(46,1)}</small>
    </section>
  )

}

export default App