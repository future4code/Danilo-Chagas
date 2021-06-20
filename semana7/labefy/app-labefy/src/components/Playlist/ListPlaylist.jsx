import React from 'react'
import axios from 'axios'
import CreatePlaylist from './CreatePlaylist'
import DetailPlaylist from './DetailPlaylist'

export default class Playlist extends React.Component {
    state = {
        playlists: [],
        quantity: '',
        playlistDetail: {}
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
        const params = 'playlists'
        const headers = { headers: { Authorization: 'danilo-chagas-molina' } }

        try {
            const response = await axios.get(url + params, headers)
            this.setState({
                playlists: response.data.result.list,
                quantity: response.data.result.quantity,
            })
        } catch (error) {
            alert(`Erro ao carregar playlists.\n${error}`)
        }


    }

    deletePlaylist = async (name, id) => {
        const confirmarExclusao = window.confirm(`Apagar a playlist ${name} ?`)

        if (confirmarExclusao) {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
            const params = 'playlists/' + id
            const headers = { headers: { Authorization: 'danilo-chagas-molina' } }

            try {
                await axios.delete(url + params, headers)
                alert(`Playlist "${name}" excluída.`)
                this.componentDidMount()
                this.setState({
                    playlistDetail: ''
                })
            } catch (error) {
                alert(`Erro ao excluir playlists.\n${error}`)
            }
        }
    }

    playlistDetail = (item) => { this.setState({ playlistDetail: item }) }

    catchTrackInfo = (info) => {
        this.props.catchTrackInfo(info)
    }

    render() {

        const displayPlaylists = this.state.quantity ?
        this.state.playlists.map((item) => {
            return <div key={item.id}>
                <li>{item.name}</li>
                <button
                    onClick={() => this.deletePlaylist(item.name, item.id)}
                >X</button>
                <button
                    onClick={() => this.playlistDetail(item)}
                >ver</button>
            </div>
        })
        :
        <p> você não tem playlist cadastrada</p>

        return (
            <div>
                <h1>Playlists</h1>
                <h3>Criar</h3>
                <CreatePlaylist
                    refreshList={() => this.componentDidMount()}
                />

                <h3>Minhas Playlists</h3>
                {displayPlaylists}

                {this.state.playlistDetail && <DetailPlaylist
                    playlistDetail={this.state.playlistDetail}
                    catchTrackInfo={this.catchTrackInfo}
                />}

            </div>
        )
    }

}