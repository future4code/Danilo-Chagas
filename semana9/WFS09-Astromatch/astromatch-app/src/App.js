import { GlobalStyle, Container } from './style'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  );
}

export default App;