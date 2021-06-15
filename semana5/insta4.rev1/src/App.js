import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    postagens: [
      {nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/id/1011/50/50",
      fotoPost:"https://picsum.photos/200/150?random=1",
    },
      {
        nomeUsuario:"fulana",
        fotoUsuario:"https://picsum.photos/id/1005/50/50",
        fotoPost:"https://picsum.photos/200/150?random=2",
      },
      {
        nomeUsuario:"ful",
        fotoUsuario:"https://picsum.photos/id/1027/50/50",
        fotoPost:"https://picsum.photos/200/150?random=3",
      },
    ]

  }


  render() {

    const postagem = this.state.postagens.map((post)=>{
      return (
        // <MainContainer key={post} >
        <Post key={post}
          fotoUsuario={post.fotoUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoPost={post.fotoPost}
          ></Post>
        // </MainContainer>

      )
    })

    return (
      <MainContainer>
        {postagem}
      </MainContainer>
      /*         
      <MainContainer>     
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/1011/50/50'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
        <Post                                 // Implementação 3.1
          nomeUsuario={'fulana'}                                //
          fotoUsuario={'https://picsum.photos/id/1005/50/50'}   //
          fotoPost={'https://picsum.photos/200/150?random=2'}   //
        />                                                      
        <Post                                                   //
          nomeUsuario={'beltrana'}                              //
          fotoUsuario={'https://picsum.photos/id/1027/50/50'}   //
          fotoPost={'https://picsum.photos/200/150?random=3'}   //
        />
      </MainContainer>
        */
    );
  }
}

export default App;
