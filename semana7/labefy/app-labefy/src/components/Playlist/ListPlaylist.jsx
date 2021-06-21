import React from 'react'
import axios from 'axios'
import CreatePlaylist from './CreatePlaylist'
import DetailPlaylist from './DetailPlaylist'
import styled from 'styled-components'

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerSplit = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`

const ContainerPlaylist = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: #d3d3d337;
    border: 1px solid lightgray;
    padding-bottom: 24px;
    padding-right: 24px;
    @media (max-device-width: 414px) {
        flex-direction: column;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 10vw;
    height: 150px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 24px;
    margin-left: 24px;
    border: 1px solid #1e64e5;
    border-radius: 4px;
    h3{
        color:#1e64e5;
    }
        :hover,:focus{
            opacity: 50%;
            cursor: pointer;
            :active{
                opacity: 80%;
            }
        }
    @media (max-device-width: 414px) {
        width: 90%;
        margin: 24px auto 0 auto;
    }
`

const CardPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    height: 150px;
    margin-top: 24px;
    margin-left: 24px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid lightgrey;
    border-radius: 4px;
    :hover,:focus{
        cursor: pointer;
        :active{
            opacity: 80%;
        }
    }
    #playlist-name{
        display: table;
        width: 100%;
        height: 100%;
        text-align: center;
        span{
            display: table-cell;
            vertical-align: middle;
            white-space: -moz-pre-wrap !important;
            white-space: -pre-wrap;     
            white-space: -o-pre-wrap;    
            white-space: pre-wrap;      
            word-wrap: break-word;      
            word-break: break-all;
            white-space: normal;
        }
    }

    .buttons{
        width: 100%;
        
        #open-playlist{
            background-image: url("https://fonts.gstatic.com/s/i/materialicons/playlist_play/v13/24px.svg");
            background-position:center;
            background-repeat: no-repeat;
            min-height: 24px;
            min-width: 24px;
            border: 0px;
            margin: 0 0.5vw;
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
    }
    @media (max-device-width: 414px) {
        width: 90%;
        margin: 24px auto 0 auto;
    }

`

const InfoTrackQty = styled.h6`
    margin: 0 0 0.5vh 1vw;
    align-self: flex-start;
    float: left;
`

export default class Playlist extends React.Component {
    state = {
        playlists: [],
        quantity: '',
        playlistDetail: {},
        creatingPlaylist: false,
        seeingPlaylist: false,
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

    playlistDetail = (item) => {
        this.setState({
            playlistDetail: item,
            seeingPlaylist: true,
        })
    }

    catchTrackInfo = (info) => {
        this.props.catchTrackInfo(info)
    }

    onClickCreatePlaylistCard = () => {
        this.setState({
            creatingPlaylist: !this.state.creatingPlaylist
        })
    }

    closeMusicPage = () => {
        this.setState({
            seeingPlaylist: false,
        })
    }

    render() {

        const displayPlaylists = this.state.quantity ?
            this.state.playlists.map((item) => {
                return <CardPlaylist key={item.id}>

                    <div id={"playlist-name"}
                    onClick={() => this.playlistDetail(item)}>
                        <span>
                            {item.name}
                        </span>
                    </div>
                    
                    <div className={"buttons"}>
                        <div id={"open-playlist"}
                            onClick={() => this.playlistDetail(item)} />
                        <div id={"delete"}
                            onClick={() => this.deletePlaylist(item.name, item.id)} />
                    </div>

                </CardPlaylist>
            })
            :
            <p> você não tem playlist cadastrada</p>


        const trackQty = this.state.quantity > 0 &&
        this.state.quantity===1 ?
        <InfoTrackQty>você tem 1 playlist</InfoTrackQty> :
        <InfoTrackQty>você tem {this.state.quantity} playlists</InfoTrackQty>

        return (
            <ContainerMain>
                <h1>Playlists</h1>

                    {trackQty}

                <ContainerSplit>
                    <ContainerPlaylist>
                        <Card
                            onClick={this.onClickCreatePlaylistCard}
                        >
                            <h3>+<br />criar<br />playlist</h3>
                        </Card>
                        <CreatePlaylist
                            refreshList={() => this.componentDidMount()}
                            activePopUp={this.state.creatingPlaylist}
                            closePopUp={this.onClickCreatePlaylistCard}
                        />

                        {displayPlaylists}

                    </ContainerPlaylist>

                    {this.state.playlistDetail && <DetailPlaylist
                        playlistDetail={this.state.playlistDetail}
                        catchTrackInfo={this.catchTrackInfo}
                        activePage={this.state.seeingPlaylist}
                        closePage={this.closeMusicPage}
                    />}

                </ContainerSplit>


            </ContainerMain>
        )
    }

}