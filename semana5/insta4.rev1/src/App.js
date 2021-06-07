import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post.js';
// import NovoPost from './components/NovoPost/NovoPost.jsx'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex-grow: 1;
  overflow-y: scroll;
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  margin: 1% 0 5% 0;
    @media (max-width: 414px) {
    margin-top: 5%;
    position: static;
    overflow: hidden;
    height: max-content;
  }
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  height: max-content;
  box-sizing: border-box;
  position: fixed;
 
  @media (max-width: 414px) {
   flex-direction: column;
   position: static;
   height:fit-content;
  }
`

const NovoPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:25vw;
  border-right: 1px solid lightgray;
   
  @media (max-width: 414px) {
    height: fit-content;
    width:100vw;
    border: 0px;
    border-bottom: 1px solid lightgray;
    position: sticky;
    top:0px;
    background-color: rgba(255,255,255,0.9);
  }
`

const Titulo = styled.h1`
  text-align: center;
  @media (max-width: 414px) {
    
  }
`

const ContainerCampo = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  width:90%;
  height: 5%;
  margin-bottom: 5%;
`

const CampoInput = styled.input`
    display: flex;
    width: 70%;
    height: 100%;
    font-size: 1em;
    flex-grow: 1;
`

const BotaoGeraLink = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  font-size: 1em;
  margin: 0 0 0 2%;
`

const BotaoPostar = styled.button`
  width: 100px;
  font-size: 1em;
`


//  INICIO C O M P O N E N T E

class App extends React.Component {

  state = {

    postagens: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/id/1011/50/50",
        fotoPost: "https://picsum.photos/200/150?random=1",
      },
      {
        nomeUsuario: "fulana",
        fotoUsuario: "https://picsum.photos/id/1005/50/50",
        fotoPost: "https://picsum.photos/200/150?random=2",
      },
      {
        nomeUsuario: "beltrana",
        fotoUsuario: "https://picsum.photos/id/1027/50/50",
        fotoPost: "https://picsum.photos/200/150?random=3",
      },
    ],

    novoNomeUsuario: '',
    novoFotoUsuario: '',
    novoFotoPost: '',

  }


  onChangeNovoNomeUsuario = (e) => {
    this.setState({
      novoNomeUsuario: e.target.value
    })
  }

  onChangeNovoFotoUsuario = (e) => {
    this.setState({
      novoFotoUsuario: e.target.value
    })
  }

  onChangeNovoFotoPost = (e) => {
    this.setState({
      novoFotoPost: e.target.value
    })
  }

  onClickPostar = () => {
    this.setState({
      postagens: [
        {
          nomeUsuario: this.state.novoNomeUsuario,
          fotoUsuario: this.state.novoFotoUsuario,
          fotoPost: this.state.novoFotoPost
        },
        ...this.state.postagens
      ]
    })

    this.setState({
      novoNomeUsuario: '',
      novoFotoUsuario: '',
      novoFotoPost: '',
    })

  }

  onClickGeraLinkFotoPost = () => {
    this.setState({
      novoFotoPost: `https://picsum.photos/200/150?random=${Math.floor(Math.random() * 10) + 1}`
    })
  }

  onClickGeraLinkFotoUsuario = () => {
    this.setState({
      novoFotoUsuario: `https://picsum.photos/50/50?random=${Math.floor(Math.random() * 10) + 1}`

    })
  }


  render() {

    const postagem = this.state.postagens.map((post) => {
      return (
        <Post key={post}
          fotoUsuario={post.fotoUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoPost={post.fotoPost}
        ></Post>
      )
    })

    return (
      <BodyContainer>

        <NovoPostContainer>

          <Titulo>Novo Post</Titulo>

          <ContainerCampo>
            <CampoInput
              type={'text'}
              placeholder={'Digite seu nome ou apelido'}
              value={this.state.novoNomeUsuario}
              onChange={this.onChangeNovoNomeUsuario}
            />
          </ContainerCampo>

          <ContainerCampo>
            <CampoInput
              type={'text'}
              placeholder={'Link imagem avatar'}
              value={this.state.novoFotoUsuario}
              onChange={this.onChangeNovoFotoUsuario}
            />
            <BotaoGeraLink
              onClick={this.onClickGeraLinkFotoUsuario}
            >
              Gera link
              </BotaoGeraLink>
          </ContainerCampo>

          <ContainerCampo>
            <CampoInput
              type={'text'}
              placeholder={'Link imagem do post'}
              value={this.state.novoFotoPost}
              onChange={this.onChangeNovoFotoPost}
            />
            <BotaoGeraLink
              onClick={this.onClickGeraLinkFotoPost}
            >
              Gera link
              </BotaoGeraLink>
          </ContainerCampo>

          <BotaoPostar
            onClick={this.onClickPostar}
          >
            Postar
          </BotaoPostar>
        </NovoPostContainer>

        <MainContainer>
          {postagem}
        </MainContainer>

      </BodyContainer>
    );
  }
}

export default App;