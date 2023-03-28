import './App.css'
import { NavBar } from './components'
import { Home } from './pages/Home'
import { LayoutContainer } from './styled-components'

function App() {

  return (
    <>
    <LayoutContainer>
      <NavBar/>
      <Home/>
    </LayoutContainer>
    </>
  )
}

export default App
