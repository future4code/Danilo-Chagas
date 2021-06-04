import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import { IconeSemContador } from '../IconeSemContador/IconeSemContador' //Desafio 1
import iconeMarcacaoBranco from '../../img/flag.svg'         //Desafio 1
import iconeMarcacaoPreto from '../../img/flag_black.svg'    //Desafio 1

import iconeCompartilharPreto from '../../img/share.svg'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar' //Desafio 2 e 3


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: flex-start;
  gap:10px;
`

const EspacoIconeMarcacao = styled.div`
  flex-grow: 1;
`


const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,             // Desafio 1
    compartilhando: false,
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = () => {
    this.setState({
      compartilhando: false
    })
  }


  onClickMarcacao = () => {           //Desafio 1
    this.setState({                   //
      marcacao: !this.state.marcacao  //
    })
  }

  onClickCurtida = () => {
    console.log('Curtiu!')

    let implementa              // Implementação 3.3
    //
    if (this.state.curtido) {   //
      implementa = -1           //
    } else {                    //
      implementa = 1            //
    }

    this.setState({
      curtido: !this.state.curtido, //Implementação 3.2
      numeroCurtidas: this.state.numeroCurtidas + implementa //Implementação 3.3
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeMarcacao                       //Desafio 1

    if (this.state.marcacao) {              //
      iconeMarcacao = iconeMarcacaoPreto    //
    } else {                                //
      iconeMarcacao = iconeMarcacaoBranco   //
    }

    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let componenteCompartilhar //Desafio 2 e 3
    if (this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoEnviar={this.aoCompartilhar} />
    }


    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador                    //Desafio 2 e 3
          icone={iconeCompartilharPreto}          //
          onClickIcone={this.onClickCompartilhar} //
        />

        <EspacoIconeMarcacao>
        <IconeSemContador                    //Desafio 1
          icone={iconeMarcacao}                 //
          onClickIcone={this.onClickMarcacao}   //
          />
        </EspacoIconeMarcacao>
        

      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post