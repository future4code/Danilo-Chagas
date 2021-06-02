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
  render() {
    return (
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
    );
  }
}

export default App;
