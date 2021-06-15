import React from 'react'
import styled from 'styled-components'
import Cadastro from './component/Cadastro/Cadastro'
import Lista from './component/Lista/Lista'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BotaoTrocaPagina = styled.button`
  margin-top: 2%;
`

export default class App extends React.Component {
  state = {
    pagina: "lista"
  }


  onClickMudaPagina = () => {
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "lista" })
    } else {
      this.setState({ pagina: "cadastro" })

    }
  }

  render() {

    const paginaAtiva = () => {
      if (this.state.pagina === "cadastro") {
        return (<Cadastro/>)
      } else {
        return (<Lista/>)
      }
    }

    const textoBotao = this.state.pagina === "cadastro"  ? "Lista de Usuários" : "Tela de Cadastro"

    return (
      <Container>
        <BotaoTrocaPagina
          onClick={this.onClickMudaPagina}
        >
          {textoBotao}
        </BotaoTrocaPagina>
        
        {paginaAtiva()}
      
      </Container>
    )
  }
}