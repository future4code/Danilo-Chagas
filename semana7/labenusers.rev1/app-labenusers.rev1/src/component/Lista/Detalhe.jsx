import React from "react"
import axios from 'axios'
import styled from "styled-components"

const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 1vh;
    margin: 5% auto auto auto ;
    padding: 2%;
    width: fit-content;
    border: 1px solid lightgray;
    border-radius: 20px;
`
const ContainerBotoes = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 5%;
`

const CamposAlteracao = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1vh;
  width: 100%;
  
`

export default class Lista extends React.Component {

    state = {
        cadastro: [],
        editando: false,
        editName: "",
        editEmail: "",
    }

    componentDidMount() {
        this.buscarCadastro()
    }

    buscarCadastro = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
        const param = this.props.detalhesItem
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }


        try {
            const resposta = await axios.get(url + param, header)
            this.setState({
                cadastro: resposta.data
            })

        } catch (error) {
            alert(`Erro: ${error.response.data.message}`)
        }
    }

    onClickDelete = async (id) => {

        const confirmarExclusao = window.confirm(`Excluir ${this.state.cadastro.name}?`)

        if (confirmarExclusao) {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
            const param = id
            const header = { headers: { Authorization: 'danilo-chagas-molina' } }

            try {
                await axios.delete(url + param, header)
                alert("Cadastro excluído")
                this.props.voltarParaLista()
            } catch (error) {
                alert(`Erro: ${error.response.data.message}`)
            }
        }

    }

    onClickEditar = async () => {
        if (this.state.editando) {

            if (this.state.editEmail === "" && this.state.editName === "") {
                this.setState({
                    editando: !this.state.editando
                })
            } else {
                const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
                const param = this.props.detalhesItem
                const header = { headers: { Authorization: 'danilo-chagas-molina' } }
                const body = this.state.editName && this.state.editEmail ?
                    { name: this.state.editName, email: this.state.editEmail }
                    :
                    this.state.editName ?
                        { "name": this.state.editName } : { "email": this.state.editEmail }


                try {
                    const resposta = await axios.put(url + param, body, header)
                    this.setState({
                        cadastro: resposta.data
                    })
                    this.buscarCadastro()
                    alert(
                        `Alteração realizada com sucesso!\nAlterações:\n${this.state.editName && this.state.editEmail ?
                            "Nome: " + this.state.editName + "\nE-mail: " + this.state.editEmail
                            : this.state.editName ?
                                "Nome: " + this.state.editName
                                : "E-mail: " + this.state.editEmail}`
                    )
                    this.setState({
                        editando: false,
                        editEmail: "",
                        editName: "",
                    })
                } catch (error) {
                    alert(`Erro: ${error.response.data.message}`)
                }
            }
        } else {
            this.setState({
                editando: !this.state.editando
            })
        }
    }

    textoDoBotaoEditarSalvar = () => {

        if (this.state.editando) {
            return "Salvar"
        } else {
            return "Editar"
        }

    }


    onChangeInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {

        const editar = this.state.editando ?
            <CamposAlteracao>
                <input
                    id={"editName"}
                    placeholder={"Alterar Nome"}
                    value={this.state.editName}
                    onChange={this.onChangeInput}
                />
                <input
                    id={"editEmail"}
                    placeholder={"Alterar E-mail"}
                    value={this.state.editEmail}
                    onChange={this.onChangeInput}
                />

            </CamposAlteracao>
            :
            <div>
                <p>nome: {this.state.cadastro.name}</p>
                <p>e-mail: {this.state.cadastro.email}</p>
            </div>


        return (
            <ContainerLista>
                <h1>Detalhes do Cadastro</h1>
                <ContainerBotoes>
                    <button
                        onClick={this.onClickEditar}>
                        {this.textoDoBotaoEditarSalvar()}
                    </button>
                    <button
                        onClick={() => this.onClickDelete(this.state.cadastro.id)}
                    >excluir cadastro
                    </button>
                </ContainerBotoes>
                <CamposAlteracao>
                    {editar}
                </CamposAlteracao>

            </ContainerLista>

        )
    }
}