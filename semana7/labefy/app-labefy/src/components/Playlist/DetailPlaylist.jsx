import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AddTrackToPlaylist from './AddTrackToPlaylist'

const ContainerDetailPlaylist = styled.div`
    display: ${({ activePage }) => (activePage ? `flex` : `none`)};
    flex-direction: column;
    min-width: 32%;
    border: 1px solid lightgrey;
    h1{
        text-align: center;
        display: inline;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
    }
    #button-close{
        cursor: pointer;
        border: 0;
        margin-left: 0.1rem;
        padding: 0 1rem 0 1rem;
        background: #1e88e56e;
        color: white;
        :focus,:hover{
            background: #1e64e5;
            cursor: pointer;
        }
        :active{
            transform: scale(0.99);
        }
    }

    @media (max-device-width: 414px) {
        position: absolute;
        z-index: 1;
        width: 98%;
        padding-bottom: 1rem;
        background-color: #eeeeee;
    }

`

const ContainerNewTrack = styled.div`
        margin: 0 0 1vh 0;
        padding: 0 0 0 1vw;
        background: #1E88E5;
        color: white;
            :focus,:hover{
                background: #1e64e5;
                cursor: pointer;
            }
            :active{
                transform: scale(0.99);
            }
            h4{
                margin: 1% 0;
            }
`

const ContainerTrack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.1vw 0 0 0;
    padding: 0 1vw 0 1vw;
    border-bottom: 1px solid lightgray ;
    max-width: 100%;
        li{
            flex-grow: 1;
            list-style: none;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            direction: ltr;
        }
        :hover{
            transform: scale(0.99);
        }
        .buttons{
            display: flex;
            flex-direction: row;
            gap: 1vw;
            margin-left: 2vw;
             :hover{
                
            }
            #delete{
                background-image: url("https://fonts.gstatic.com/s/i/materialicons/delete_outline/v10/24px.svg");
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
            }
            
            #play{
            background-image: url("https://fonts.gstatic.com/s/i/materialicons/play_circle_outline/v17/24px.svg");
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
            }
        }    
`

const InfoTrackQty = styled.h6`
    margin: 0 0 0.5vh 1vw;
`

export default class DetailPlaylist extends React.Component {

    state = {
        tracks: [],
        quantity: '',
        addingTrack: false,
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

    closePage = () => {
        this.props.closePage()
    }

    addingTrack = () => {
        this.setState({
            addingTrack: true
        })
    }

    closePopUp = () => {
        this.setState({
            addingTrack: false,
        })
    }

    render() {

        const displayTracks = !this.props.playlistDetail.id ?
            <p>Você não definiu a playlist<code>=/</code></p>
            :
            !this.state.quantity ?
                <ContainerTrack><li>
                    sem músicas =/
                </li>
                </ContainerTrack>
                :
                this.state.tracks.map((item) => {

                    return <ContainerTrack>
                        <li>{item.name}</li>

                        <div className={"buttons"}>
                            <div id={"delete"}
                                onClick={() => this.deleteTrack(item.name,
                                    item.id,
                                    this.props.playlistDetail.id)}
                            />
                            <div id={"play"}
                                onClick={() => this.catchTrackInfo(item)}
                            />
                        </div>

                    </ContainerTrack>

                })

        const trackQty = this.state.quantity > 0 &&
        <InfoTrackQty>você tem {this.state.quantity} músicas</InfoTrackQty>

        return (
            <ContainerDetailPlaylist
                activePage={this.props.activePage}>

                <AddTrackToPlaylist
                    playlistIdToAddTrack={this.props.playlistDetail.id}
                    refreshList={() => this.componentDidMount()}
                    activePopUp={this.state.addingTrack}
                    closePopUp={this.closePopUp}
                />

                <div>                    
                    <button id={"button-close"}
                        onClick={this.props.closePage}>
                        Fechar
                    </button>
                </div>

                <h1>Playlist<br />{this.props.playlistDetail.name}</h1>
                {trackQty}

                <ContainerNewTrack
                    onClick={this.addingTrack}>
                    <h4>+ adicionar música</h4>
                </ContainerNewTrack>
               
                {displayTracks}

            </ContainerDetailPlaylist>
        )
    }

}