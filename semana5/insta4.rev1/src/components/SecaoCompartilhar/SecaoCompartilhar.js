//Desafio 2 e 3

import React, { Component } from 'react'
import styled from 'styled-components'
import iconTwitter from '../../img/twitter.svg'
import iconFacebook from '../../img/facebook.svg'
import iconInstagram from '../../img/instagram.svg'

const ContainerCompartilhamento = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 95%;
`

const ContainerSocialMedia = styled.div`
    display:flex;
    justify-content: center;
    padding: 5px;
`

const ImgSocialMedia = styled.img`
    width:24px;
    padding: 0 5px;
    :hover,
    :focus{
        opacity: 50%;
    }
    :active{
        opacity: 80%;
    }
    
`

export class SecaoCompartilhar extends React.Component {

    state = {
        valueComentario: ""
    }

    onChangeComentario = (event) => {
        // console.log(event.target.value)
        this.setState({
            valueComentario: event.target.value
        })
    }


    onClickSocialMedia = (event) => {

        if (this.state.valueComentario !== "") {
            console.log('Post compartilhado no ' + event.target.id + ' com a mensagem: ' + this.state.valueComentario);

            alert('Post compartilhado no ' + event.target.id + ' com a mensagem: ' + this.state.valueComentario);

        } else {
            console.log('Post compartilhado no ' + event.target.id)
            alert('Post compartilhado no ' + event.target.id)
        }

        this.props.aoEnviar()
    }

    render() {
        return <ContainerCompartilhamento>
            <ContainerSocialMedia>
                <ImgSocialMedia
                    id={'Twitter'}
                    src={iconTwitter}
                    onClick={this.onClickSocialMedia} />
                <ImgSocialMedia
                    id={'Facebook'}
                    src={iconFacebook}
                    onClick={this.onClickSocialMedia} />
                <ImgSocialMedia
                    id={'Instagram'}
                    src={iconInstagram}
                    onClick={this.onClickSocialMedia} />
            </ContainerSocialMedia>
            <InputComentario
                placeholder={'Deixe uma mensagem e escolha a rede social'}
                value={this.state.valueComentario}
                onChange={this.onChangeComentario}
            />
        </ContainerCompartilhamento>
    }
}