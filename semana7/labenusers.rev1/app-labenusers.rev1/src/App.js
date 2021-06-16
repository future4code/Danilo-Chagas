import React from 'react'
import styled from 'styled-components'
import Cadastro from './component/Cadastro/Cadastro'
import Lista from './component/Lista/Lista'
import Detalhe from './component/Lista/Detalhe'

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
    pagina: "cadastro",
    detalhesId: "",
  }


  onClickMudaPagina = () => {
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "lista" })
    } else if (this.state.pagina === "lista") {
      this.setState({ pagina: "cadastro" })
    } else {
      this.setState({ pagina: "lista" })
    }
  }

  irParaDetalhe = (id) => {
    this.setState({
      pagina: "detalhe",
      detalhesId: id,
    })
  }

  render() {

    const paginaAtiva = () => {
      if (this.state.pagina === "cadastro") {
        return (<Cadastro/>)
      } else if (this.state.pagina === "lista") {
        return (<Lista onClickDetalhe={this.irParaDetalhe}/>)
      } else {
        return (<Detalhe detalhesItem={this.state.detalhesId} voltarParaLista={this.onClickMudaPagina}/>)
      }
    }

    const textoBotao = (pagina) => {
      if (pagina === "cadastro") {
        return "ir para: Lista de Usuários"
      } else if (pagina === "lista") {
        return "voltar para: Tela de Cadastro"
      } else {
        return "voltar para: Lista de Usuários"    
      }
    }

    return (
      <Container>
        <BotaoTrocaPagina
          onClick={()=>this.onClickMudaPagina()}
        >
          {textoBotao(this.state.pagina)}
        </BotaoTrocaPagina>
        
        {paginaAtiva()}
      
      </Container>
    )
  }
}