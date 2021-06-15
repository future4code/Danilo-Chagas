// import React from 'react'
// import styled from 'styled-components'


// const Container = styled.div``
// const Titulo = styled.h1``
// const CampoInput = styled.input``

// class NovoPost extends React.Component{

//     state = {
//         novoFotoUsuario:"",
//         novoNomeUsuario:"",
//         novoFotoPost:"",

//     }

//     onChangeNovoNomeUsuario = (e) => {
//         this.setState({
//             novoNomeUsuario: e.target.value
//         })
//     }
    
//     onChangeNovoFotoUsuario = (e) => {
//         this.setState({
//         novoFotoUsuario: e.target.value
//         })
//     }

//     onChangeNovoFotoPost = (e) => {
//         this.setState({
//             novoFotoPost: e.target.value
//             })
//     } 

//     render(){


//         return(
//         <ContainerNovoPost>
//         <Titulo>Novo Post</Titulo>
//         <CampoInput
//         type={'text'}
//         id={''}
//         placeholder={'Digite seu nome ou apelido'}
//         value={this.state.novoNomeUsuario}
//         onChange={this.onChangeNovoNomeUsuario}
//         />
//         <CampoInput
//         type={'text'}
//         id={''}
//         placeholder={'Link da imagem do avatar'}
//         value={this.state.novoFotoUsuario}
//         onChange={this.onChangeNovoFotoUsuario}
//         />
//         <CampoInput
//         type={'text'}
//         id={""}
//         placeholder={'Link da imagem do seu post'}
//         value={this.state.novoFotoPost}
//         onChange={this.onChangeNovoFotoPost}
//         />
//         </ContainerNovoPost>

//         )

//     }
// }

// export default NovoPost