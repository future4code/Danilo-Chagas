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

const ContainerBusca = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2em;
  margin-bottom: 2vh;
`
const CampoBusca = styled.input`
    width: 100%;
`

const BotaoBuscar = styled.div`
    background-image: url("https://fonts.gstatic.com/s/i/materialicons/search/v15/24px.svg");
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

const BotaoDetalhe = styled.div`
    background-image: url("https://fonts.gstatic.com/s/i/materialicons/read_more/v12/24px.svg");
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
        paginaDetalhe: true,
        nomeProcurado: "",
    }

    componentDidMount() {
        this.atualizarLista()
    }

    atualizarLista = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }

        try {
            const resposta = await axios.get(url, header)
                    this.setState({
                        cadastro: resposta.data
                    })
        } catch (error) {
            alert(`Erro`)
        }
    }

    onClickDelete = async (item) => {

        const confirmarExclusao = window.confirm(`Excluir ${item.name}?`)

        if (confirmarExclusao) {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
            const param = item.id
            const header = { headers: { Authorization: 'danilo-chagas-molina' } }

            try {
                await axios.delete(url + param, header)
                alert("Cadastro excluído")
                this.atualizarLista()

            } catch (error) {
                alert(`Erro`)
            }
        }

    }

    retornaDetalheParaApp = (id) => {
        this.props.onClickDetalhe(id)
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    onClickBuscar = async () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name="
        const param = this.state.nomeProcurado
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }

        try {
            const resposta = await axios.get(url + param, header,)
            this.setState({
                cadastro: resposta.data
            })
            this.setState({ nomeProcurado: "" })
        } catch (erro) {
            alert(`Erro: ${erro.response.data.message}`)
        }


    }

    render() {

        const listaCadastrados = this.state.cadastro.map((item) => {
            return <ContainerItem key={item.id}>
                <Item>{item.name}</Item>
                <Delete onClick={() => this.onClickDelete(item)} />
                <BotaoDetalhe
                    detalhes={item}
                    onClick={() => this.retornaDetalheParaApp(item.id)}
                />
            </ContainerItem>
        })

        return (
            <ContainerLista>
                <h1>
                    Lista de Cadastro
                </h1>

                <ContainerBusca>
                    <CampoBusca
                        id={"nomeProcurado"}
                        placeholder={"Buscar por Nome"}
                        value={this.state.nomeProcurado}
                        onChange={this.onChangeInput}
                    />
                    <BotaoBuscar
                        onClick={this.onClickBuscar}
                    ></BotaoBuscar>
                </ContainerBusca>

                {listaCadastrados}
            </ContainerLista>
        )
    }
}
