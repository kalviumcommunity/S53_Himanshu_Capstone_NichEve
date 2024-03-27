import './App.css'
import Lenis from '@studio-freight/lenis'
import Routing from './Routes/Routing'
function App() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
      <Routing/>
    </>
  )
}

export default App
