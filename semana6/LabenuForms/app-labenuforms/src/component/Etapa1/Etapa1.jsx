import React from "react"
import styled from "styled-components"
import { PerguntaAberta } from "../PerguntaAberta/PerguntaAberta.jsx"
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

export default class Etapa1 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: "",
        escolaridade: "",
    }

    guardaState = (e) => {
        this.setState({[e.target.id]: e.target.value})   
    }
    //achei em https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name


    render() {
        return (
            <ContainerEtapa>
                <h1> ETAPA 1: Dados gerais</h1>
                <PerguntaAberta
                    pergunta={"1. Qual o seu nome?"}
                    id={"nome"}
                    onChange={this.guardaState}
                    // value={this.state.nome}
                />

                <PerguntaAberta
                    pergunta={"2. Qual sua idade"}
                    id={"idade"}
                    onChange={this.guardaState}
                    value={this.state.idade}
                />

                <PerguntaAberta
                    pergunta={"3. Qual o seu email"} 
                    id={"email"}
                    onChange={this.guardaState}
                    value={this.state.email}
                />

                <PerguntaOpcoes
                    pergunta={"4. Qual o grau de escolaridade?"}
                    id={"escolaridade"}
                    opcoes={["<escolher>",
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo"
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