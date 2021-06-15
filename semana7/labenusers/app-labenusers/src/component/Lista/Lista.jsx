import React from "react"
import axios from 'axios'
import styled from "styled-components"

export default class Lista extends React.Component {
    
    state = {
        cadastro: [
        //     {name:"",
        // email:""},
        ]
    }
    
    onClickPegaLista = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const header = { headers: { Authorization: 'danilo-chagas-molina' } }

        axios.get(url, header)
            .then((resposta) => {
                this.setState({
                    cadastro: resposta.data
                })
                console.log(resposta.data)
                console.log(this.state.cadastro)
            })
            .catch((erro) => { alert(`Erro`) })
    }


    render(){
    
        const listaCadastrados = this.state.cadastro.map((item)=>{
            return <li key={item.id}>{item.name}</li>
            })
        
        return (
            <div>
                <h1>
                    Lista de Cadastro
                </h1>
                <button onClick={this.onClickPegaLista}>gera lista</button>
                {listaCadastrados}
            </div>
        )
    }
}
