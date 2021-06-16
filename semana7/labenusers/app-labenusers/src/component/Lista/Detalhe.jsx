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
    /* background-color: blue; */
`

const ContainerItem = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2em;
  border-bottom: 1px solid lightgray;
  margin-bottom: 1vh;
`

const Item = styled.li`
text-align: left;
flex-grow:1;
font-size: 1em;
list-style: none;
`

const Delete = styled.div`
    background-image: url("https://fonts.gstatic.com/s/i/materialicons/delete/v13/24px.svg");
    background-position:center;
    background-repeat: no-repeat;
    min-height: 24px;
    min-width: 24px;
    border: 0px;
    float:right;
    opacity: 50%;
        :hover,:focus{
            opacity: 100%;
            cursor: pointer;
            :active{
                background-size: 22px;
            }
        }

`


export default class Lista extends React.Component {

    state = {
        cadastro: [],
    }

    componentDidMount() {
        this.buscaCadastro()
    }

    buscaCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
        const param = this.props.detalhesItem
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }

        axios.get(url + param, header)
            .then((resposta) => {
                this.setState({
                    cadastro: resposta.data
                })
                console.log(this.state.cadastro)
            })
            .catch((erro) => { alert(`Erro: ${erro.response.data.message}`) })
    }

    onClickDelete = (id) => {

        const confirmarExclusao = window.confirm(`Excluir ${this.state.cadastro.name}?`)

        if (confirmarExclusao) {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
            const param = id
            const header = { headers: { Authorization: 'danilo-chagas-molina' } }

            axios.delete(url + param, header)
                .then(() => {
                    alert("Cadastro excluído")
                    this.props.voltarParaLista()
                })
                .catch((erro) => { alert(`Erro: ${erro.response.data.message}`) })
        }

    }

    render() {

        return (
            <ContainerLista>
                <h1>Detalhes do Cadastro</h1>
                <div>
                    <button
                    onClick={()=>this.onClickDelete(this.state.cadastro.id)}
                    >excluir cadastro</button>
                    <p>nome: {this.state.cadastro.name}</p>
                    <p>e-mail: {this.state.cadastro.email}</p>
                </div>
            </ContainerLista>

        )
    }
}