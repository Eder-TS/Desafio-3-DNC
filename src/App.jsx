import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Card from './components/elements/Card'
import './App.css'
import projects from './components/Projects/projects.js'

function App() {
  return (
    <>
      <NavBar/>
      <Presentation/>
      <Card
        site= {projects[0].site}
        src= {projects[0].src}
        alt= {projects[0].alt}
        title= {projects[0].title}
        description= {projects[0].description}
        repo= {projects[0].repo}
      />
    </>
  )
}

export default App
