import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerAddTrackToPlaylist = styled.div`
    display: ${({ activePopUp }) => (activePopUp ? `flex` : `none`)};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    margin: 0 -50%;
    width: 50%;
    height: 50%;
    border-radius: 10px;
    background-color: #ccccccef;
        p{
            margin-top: -2%;
            width: 50%;
            text-align: center;
        }
        input{
            height: 5vh;
            font-size: 1.2em;
            margin-top: 1vh;
        }
        .button{
            display: flex;
            margin-top: 2vh;
        }

        button{ 
            border: 0;
            border-radius: 0.25rem;
            background: #1E88E5;
            color: white;
            font-family: system-ui, sans-serif;
            font-size: 1rem;
            line-height: 1.2;
            white-space: nowrap;
            text-decoration: none;
            padding: 0.25rem 0.5rem;
            margin: 0.5rem;
            cursor: pointer;
                :hover,
                :focus {
                    background: #1e64e5;
                }

                :active {
                    transform: scale(0.99);
                }
        }

@media (max-device-width: 414px) {
    margin: auto 5%;
    width: 90%;
    height: fit-content;
        p{
            margin-top: -2%;
            width: 90%;
            text-align: center;
        }
        button{
            margin: 1rem;
        }
}
`

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

        if(this.state.trackToAdd.name&&
            this.state.trackToAdd.artist&&
            this.state.trackToAdd.url) {
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
        } else {
            alert('Preencha as informações.')
      
        }
    }

    closePopUp = () => {
        this.props.closePopUp()
    }

    render() {
       
    
        return (
            <ContainerAddTrackToPlaylist
            activePopUp={this.props.activePopUp}
            >
                
                <h1>Adicionando Música!</h1>
                <p>você poderá adicionar uma ou mais 
                    músicas e depois fechar assim que terminar</p>

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
                
                <div className={"button"}>
                <button 
                    onClick={this.closePopUp}>
                    Fechar
                </button>                        
                <button 
                    onClick={() => this.addTrackToPlaylist(
                        this.props.playlistIdToAddTrack,
                        this.state.trackToAdd
                        )}>
                    Salvar
                </button>
                </div>
            </ContainerAddTrackToPlaylist>
        )
    }
}