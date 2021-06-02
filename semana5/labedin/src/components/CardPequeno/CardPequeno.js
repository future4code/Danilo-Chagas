import React from 'react';
// import './CardPequeno.css'
import styled from 'styled-components'

//smallcard-container"
const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`

//.smallcard-container > img {
const Imagem = styled.img`  
    width: 35px;
    margin-right: 10px;
    border-radius: 50%;
`

//.smallcard-container h4 {
const Titulo = styled.h4`
    margin-right: 15px;
`

//.smallcard-container > div {
const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <Container>
            <Imagem src={ props.imagem } />
            <Conteudo>
                <Titulo>{ props.tipo }</Titulo>
                <p>{ props.descricao }</p>
            </Conteudo>
        </Container>
    )
}

export default CardPequeno;