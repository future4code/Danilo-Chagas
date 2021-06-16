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
/* text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};*/ //-algo para estilizar depois 
min-width: 90%;
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
        cadastro: [
        //     {name:"",
        // email:""},
        ]
    }
    
    componentDidMount () {
        this.atualizarLista()
    }

    atualizarLista = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }

        axios.get(url, header)
            .then((resposta) => {
                this.setState({
                    cadastro: resposta.data
                })
            })
            .catch((erro) => { alert(`Erro`) })
    }

    onClickDelete (id) {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
        const param = id
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }

        axios.delete(url+param, header)
            .then(() => {
               alert("Cadastro excluído")
               this.atualizarLista()
            })
            .catch((erro) => { alert(`Erro`) })
    }


    render(){
    
        const listaCadastrados = this.state.cadastro.map((item)=>{
            return <ContainerItem>
                <Item key={item.id}>{item.name}</Item>
                <Delete onClick={()=>this.onClickDelete(item.id)}/>
                </ContainerItem>
            })
        
        return (
            <Container>
                <h1>
                    Lista de Cadastro
                </h1>
                {listaCadastrados}
            </Container>
        )
    }
}
