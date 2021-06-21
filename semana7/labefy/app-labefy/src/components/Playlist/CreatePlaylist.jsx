import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const ContainerCreatePlaylist = styled.div`
    display: ${({ activePopUp }) => (activePopUp ? `flex` : `none`)};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    width: 50%;
    height: fit-content;
    padding: 0.5rem;
    margin: auto 25%;
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
    margin: auto 2.5%;
    width: 90%;
        p{
            margin-top: -2%;
            width: 90%;
            text-align: center;
        }
}
`

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
        if (!this.state.value) {
            return alert("Insira uma nome")
        } else {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
            const params = 'playlists'
            const headers = { headers: { Authorization: 'danilo-chagas-molina' } }
            const body = { 'name': this.state.value }

            try {
                await axios.post(url + params, body, headers)
                alert(`Playlist "${this.state.value}" cadastrada!`)
                this.setState({
                    value: ""
                })
                this.props.refreshList()
            } catch (error) {
                alert(`Erro ao criar playlist.\nVerifique se já existe uma playlist com o mesmo nome\n${error}`)
            }
        }


    }

    closePopUp = () => {
        return this.props.closePopUp()
    }

    render() {

        return (
            <ContainerCreatePlaylist
                activePopUp={this.props.activePopUp}
            >
                <h1>Criando Playlist!</h1>

                <p>você poderá criar uma ou mais playlists e depois fechar assim que terminar</p>
                <input
                    placeholder={"Insira o nome da sua playlist"}
                    value={this.state.value}
                    onChange={this.onChangeInput}
                />
                <div className={"button"}>
                    <button onClick={this.closePopUp}>
                        Fechar
                    </button>
                    <button onClick={() => this.createPlaylist()}>
                        Salvar
                    </button>
                </div>


            </ContainerCreatePlaylist>
        )
    }

}