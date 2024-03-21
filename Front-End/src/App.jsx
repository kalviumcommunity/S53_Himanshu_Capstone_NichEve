import './App.css'
import Lenis from '@studio-freight/lenis'
import Body from './Components/Body'
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
      <Body/>
    </>
  )
}

export default App
