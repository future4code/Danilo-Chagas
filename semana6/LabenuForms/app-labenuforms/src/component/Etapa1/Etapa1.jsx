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
export const Etapa1 = (props) => {
    return(
        <ContainerEtapa>
            <h1> ETAPA 1: Dados gerais</h1>
            <p>Qual o seu nome?</p>
            <input type={"text"}></input>
            <p>Qual sua Idade</p>
            <input type={"text"}></input>
            <p>Qual o seu email</p>
            <input type={"text"}></input>
            <p>Qual o grau de escolaridade</p>
            <select>
                <option value="ensinoMedioIncompleto"
                >Ensino Médio Incompleto</option>
                <option value="ensinoMedioCompleto"
                >Ensino Médio Completo</option>
                <option value="ensinoSuperiorIncompleto"
                >Ensino Superior Incompleto</option>
                <option value="ensinoSuperiorCompleto"
                >Ensino Superior Completo</option>
            </select>

            <BotaoPagina
            onClick={props.onClickProximaEtapa}
            >Próxima Etapa
            </BotaoPagina>


        </ContainerEtapa>
    )
}