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

export const Etapa3 = (props) => {
    return(
        <ContainerEtapa>
            <h1> ETAPA 3: Informações Gerais de Ensino</h1>
            <p>Por que você não terminou um curso de graduação</p>
            <input type={"text"}></input>
            <p>Você fez algum curso complementar?</p>
            <input type={"text"}></input>
            <p>Qual o grau de escolaridade</p>
            <select>
                <option value="cursoTecnico"
                >Curso Técnico</option>
                <option value="cursoIngles"
                >Curso de Inglês</option>
                <option value="semCursoComplementar"
                >Não fiz curso complementar</option>
            </select>

            <BotaoPagina
            onClick={props.onClickProximaEtapa}
            >Próxima Etapa
            </BotaoPagina>

        </ContainerEtapa>
    )
}