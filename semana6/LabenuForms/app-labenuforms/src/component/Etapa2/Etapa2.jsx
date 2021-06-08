import React from "react"
import styled from "styled-components"
import {PerguntaFechada} from "../PerguntaFechada/PerguntaFechada.jsx"


const ContainerEtapa = styled.div`
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
export default class Etapa2 extends React.Component {
    state = {
        curso:"",
        unidade:"",
    }

    guardaState = (e) => {
        this.setState({[e.target.id]: e.target.value})   
    }

    render() {
        return (
            <ContainerEtapa>
                <h1> ETAPA 2: Informações do Ensino Superior</h1>
                <PerguntaFechada
                    pergunta={"Qual o curso?"}
                    id={"curso"}
                    onChange={this.guardaState}
                    value={this.state.curso}
                />
                
                <PerguntaFechada
                pergunta={"Qual a unidade de Ensino"}
                id={"unidade"}
                onChange={this.guardaState}
                value={this.state.unidade}
                />

                <BotaoPagina
                    onClick={this.props.onClickProximaEtapa}
                >Próxima Etapa
            </BotaoPagina>

            </ContainerEtapa>
        )
    }
}