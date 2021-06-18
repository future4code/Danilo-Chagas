import React from 'react'
import axios from 'axios'

export default class CreatePlaylist extends React.Component {
    state = {
        value: "",
    }

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    createPlaylist = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
    const params = 'playlists'
    const headers = { headers: { Authorization: 'danilo-chagas-molina' } }
    const body = {'name': this.state.value}

    try{
        await axios.post(url+params,body,headers)
        alert(`Playlist "${this.state.value}" cadastrada!`)
        this.setState({
            value: ""
        })
        this.props.refreshList()
    } catch (error) {
        alert(`Erro ao criar playlist.\n${error}`)
    }


    }

    render () {
    
        return (
            <div>
                <input
                placeholder={"Insira o nome da sua playlist"}
                value={this.state.value}
                onChange={this.onChangeInput}
                />
                <button
                onClick={()=>this.createPlaylist()}>
                    Salvar
                </button>
            </div>
        )
    }

}