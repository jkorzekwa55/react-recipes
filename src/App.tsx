import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './common/Header/Header'
import Body from './pages/Body/Body'
import { MantineProvider } from '@mantine/core'

function App() {

  return (
    <>
    <MantineProvider>
      <Header/>
      <Body/>
    </MantineProvider>
    
    </>
  )
}

export default App
