import "././components/container/container.scss"
import Headr from "./components/headr/headr"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Retsept from "./components/retsept/retsept";


function App() {
  return (
    <div className="container">
      <Headr />
      <Hero />
      <About />
      <Retsept />
    </div>
  )
}

export default App