import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Favourite from './components/Favourite/Favourite'

const App = () => {
  return (
    <main>  
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
        <About />
        <Favourite />
      </Container>
    </main>
  );
};

export default App;