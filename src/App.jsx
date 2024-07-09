import NavBar from './components/NavBar'
import { Presentation } from './components/Presentation'
import Card from './components/elements/Card'
import './App.css'
import products from './components/Projects/projects.js'

function App() {
  return (
    <>
      <NavBar/>
      <Presentation/>
      <Card
        site= {products.site}
        src= {products.src}
        alt= {products.alt}
        title= {products.title}
        description= {products.description}
        repo= {products.repo}
      />
    </>
  )
}

export default App
