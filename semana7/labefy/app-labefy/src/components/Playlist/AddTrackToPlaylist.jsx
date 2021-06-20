import React from 'react'
import axios from 'axios'

export default class AddTrackToPlaylist extends React.Component {
    state = {
        trackToAdd: {
            name: '',
            artist: '',
            url: '',
        },
        trackToAddId: ""
    }

    onChangeInput = (e) => {
        this.setState({
            trackToAdd: {
                ...this.state.trackToAdd,
                [e.target.id]: e.target.value
            }
        })
    }

    addTrackToPlaylist = async (playlistId,trackToAdd) => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
        const params = 'playlists/'+playlistId+'/tracks?playlistId='+playlistId
        const headers = { headers: { Authorization: 'danilo-chagas-molina' } }
        const body = trackToAdd
    
        try{
            await axios.post(url+params,body,headers)
            alert(`Música "${this.state.trackToAdd.name}" cadastrada!`)
            this.setState({
                trackToAdd: {
                    name: '',
                    artist: '',
                    url: '',
                },
            })
            this.props.refreshList()
        } catch (error) {
            alert(`Erro ao criar música.\n${error}`)
        }


    }

    render() {
       
    
        return (
            <div>
                <input
                    id={"name"}
                    type="text"
                    placeholder={"Nome da Música"}
                    value={this.state.trackToAdd.name}
                    onChange={this.onChangeInput}
                />
                <input
                    id={"artist"}
                    type="text"
                    placeholder={"Nome do artista/banda"}
                    value={this.state.trackToAdd.artist}
                    onChange={this.onChangeInput}
                />
                <input
                    id={"url"}
                    type="text"
                    placeholder={"Link da música"}
                    value={this.state.trackToAdd.url}
                    onChange={this.onChangeInput}
                />
                <button
                    onClick={() => this.addTrackToPlaylist(
                        this.props.playlistIdToAddTrack,
                        this.state.trackToAdd
                    )}>
                    Salvar
                </button>
            </div>
        )
    }
}