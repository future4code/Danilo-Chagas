import React from "react"
import styled from "styled-components"

const ContainerEtapa = styled.div `
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const BotaoPagina = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`
export const Etapa2 = (props) => {
    return(
        <ContainerEtapa>
            <h1> ETAPA 2: Informações do Ensino Superior</h1>
            <p>Qual o curso?</p>
            <input type={"text"}></input>
            <p>Qual a unidade de Ensino</p>
            <input type={"text"}></input>
        
            <BotaoPagina
            onClick={props.onClickProximaEtapa}
            >Próxima Etapa
            </BotaoPagina>

        </ContainerEtapa>
    )
}