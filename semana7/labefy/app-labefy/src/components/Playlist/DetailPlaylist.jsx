import React from 'react'
import axios from 'axios'
import AddTrackToPlaylist from './AddTrackToPlaylist'


export default class DetailPlaylist extends React.Component {

    state = {
        tracks: [],
        quantity: '',
    }

    componentDidMount() {
        this.props.playlistDetail.id &&
            this.getPlaylistTracks()
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) { return this.getPlaylistTracks() } else { return false }
    }

    getPlaylistTracks = async () => {
        if (this.props.playlistDetail.id) {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
            const params = 'playlists/' + this.props.playlistDetail.id + '/tracks?' + this.props.playlistDetail.id
            const headers = { headers: { Authorization: 'danilo-chagas-molina' } }

            try {
                const response = await axios.get(url + params, headers)
                this.setState({
                    tracks: response.data.result.tracks,
                    quantity: response.data.result.quantity,
                })
            } catch (error) {
                alert(`Erro ao carregar playlists.\n${error}`)
            }
        }
    }

    deleteTrack = async (trackName, trackId, playlistId) => {
        const confirmarExclusao = window.confirm(`Apagar ${trackName} ?`)
        if (confirmarExclusao) {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
            const params = 'playlists/' + playlistId + '/tracks/' + trackId
            const headers = { headers: { Authorization: 'danilo-chagas-molina' } }

            try {
                await axios.delete(url + params, headers)
                alert(`${trackName} apagada.`)
                this.componentDidMount()
            } catch (error) {
                alert(`Erro ao exluir música.\n${error}`)
            }
        }
    }

    catchTrackInfo = (item) => {
        this.props.catchTrackInfo(item)
    }

    render() {
     
        const displayMusics = !this.props.playlistDetail.id ?
        <p>Você não definiu a playlist <code>=/</code></p>
        :
        !this.state.quantity?
        <p>sem musicas</p>
        :
            this.state.tracks.map((item) => {
    
                    return <div>
                        <li>{item.name}</li>
                        <button
                            onClick={() => this.deleteTrack(item.name, item.id, this.props.playlistDetail.id)}
                        >X</button>
                        
                        <button
                        onClick={()=>this.catchTrackInfo(item)}
                        >
                            play
                        </button>
                    </div>

            })

        return (
            <div>
                <h1>Playlist Músicas</h1>
                <h1>{this.props.playlistDetail.name}</h1>
                {displayMusics}

                <AddTrackToPlaylist
                    playlistIdToAddTrack={this.props.playlistDetail.id}
                    refreshList={() => this.componentDidMount()}

                />
            </div>
        )
    }

}

