import React from "react"
import axios from 'axios'
import styled from "styled-components"

const Container = styled.div`
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
    /* background-color: blue; */
`

const Titulo = styled.h2`
    text-align: center;
`

export default class Cadastro extends React.Component {

    state = {
        name: "",
        email: "",
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    onClickSalvar = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }

        axios.post(url, body, header)
            .then(() => { alert("Cadastro realizado com sucesso!") })
            .catch((erro) => { alert(`Erro ao cadastrar. Tente novamente.\nMensagem do erro: "${erro.response.data.message}"`) })

        this.setState({ name: "", email: "" })
    }

    render() {
        return (
            <Container>
                <Titulo>Cadastro de<br/> novos usuários</Titulo>
               
                
                    <input
                        id={"name"}
                        placeholder={"Nome"}
                        value={this.state.name}
                        onChange={this.onChangeInput} />

                    <input
                        id={"email"}
                        placeholder={"Email"}
                        value={this.state.email}
                        onChange={this.onChangeInput} />

                    <button
                        onClick={this.onClickSalvar}
                    >Salvar</button>



            </Container>
        )
    }
}