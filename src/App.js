import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Favourite from './components/Favourite/Favourite'
import Home from './components/Home/Home'

const App = () => {
  return (
    <main>  
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favourite />
      </Container>
    </main>
  );
};

export default App;