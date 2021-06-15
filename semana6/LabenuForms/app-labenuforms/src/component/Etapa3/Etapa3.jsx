import React from "react"
import styled from "styled-components"
import { PerguntaFechada } from "../PerguntaFechada/PerguntaFechada.jsx"
import PerguntaOpcoes from "../PerguntaOpcoes/PerguntaOpcoes.jsx"

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

export class Etapa3 extends React.Component {
    state = {
        razaoTermino: "",
        cursoComplementar: "",
        escolaridadeComplementar: "",
    }

    guardaState = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    render() {
        return (
            <ContainerEtapa>
                <h1> ETAPA 3: Informações Gerais de Ensino</h1>
                <PerguntaFechada
                    pergunta={"Por que você não terminou um curso de graduação"}
                    id={"razaoTermino"}
                    onChange={this.guardaState}
                    value={this.state.razaoTermino}
                />

                <PerguntaFechada
                    pergunta={"Você fez algum curso complementar?"}
                    id={"cursoComplementar"}
                    onChange={this.guardaState}
                    value={this.state.cursoComplementar}
                />

                <PerguntaOpcoes
                    pergunta={"Qual o grau de escolaridade"}
                    id={"escolaridadeComplementar"}
                    opcoes={["<escolher>",
                        "Curso Técnico",
                        "Curso de Inglês",
                        "Não fiz curso complementar",
                    ]}
                    onChange={this.guardaState}
                />

                <BotaoPagina
                    onClick={this.props.onClickProximaEtapa}
                >Próxima Etapa
            </BotaoPagina>

            </ContainerEtapa>
        )
    }
}