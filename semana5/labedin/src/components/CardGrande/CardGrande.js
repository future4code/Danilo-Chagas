import React from 'react';
// import './CardGrande.css'
import styled from 'styled-components'

//bigcard-container
const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

//.bigcard-container > img {
const Imagem = styled.img`  
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

//.bigcard-container h4 {
const Titulo = styled.h4`
    margin-right: 15px;
`

//.bigcard-container > div {
const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
function CardGrande(props) {
    return (
        <Container>
            <Imagem src={ props.imagem } />
            <Conteudo>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </Conteudo>
        </Container>
    )
}

export default CardGrande;