import React from "react"
import styled from 'styled-components'
import ListPlaylist from './components/Playlist/ListPlaylist'
import PlayTrack from "./components/Musica/PlayTrack"
import bg from "./media/bglabefy.jpg"

const Container = styled.div`
  height: 100vh;
 background-color: rgba(150,150,150,.8);

  button{
  position: relative;
  z-index: 2;
  top: 0;
  border: 0;
  border-radius: 0;
  background: #1E88E5;
  color: white;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0;
  cursor: pointer;
      :hover,
      :focus {
          background: #1e64e5;
      }

      :active {
          transform: scale(0.99);
      }
}
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  position: absolute;
  top: 0;
  z-index: 1;
  min-width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: blue;
  @media (max-device-width:414px) {
    align-items: center;
    justify-content: center;
    }
  h1{
    margin: 0;
    padding-right:2vw;
    padding-top: 5vh;
    text-align: center;
    font-size: 25vw;
    font-variant: small-caps;
    color: #1E88E5;
    text-shadow: 2px 10px 5px #1e64e5;
    @media (max-device-width:414px) {
      padding-top: 0;
      background-color: #1E88E5;
      width: 100%;
      color: white;
      text-shadow: 2px 5px 5px #1e64e5;
    }
  };
`

export default class App extends React.Component {
  state = {
    trackInfo: [],
    page: 'home',
  }

  trackInfo = (info) => {
    this.setState({
      trackInfo: info
    })
  }

  onClickSwitchPage = () => {
    this.state.page === 'home' ?
    this.setState({page: 'playlists'}) : 
    this.setState({page: 'home'})
  }

  render() {

    const activePage = this.state.page === 'home' ?
    <Logo><h1>Labefy</h1></Logo> 
    :
    <ListPlaylist
      catchTrackInfo={this.trackInfo}
    />

    const buttonTextSwitch = this.state.page === 'home' ?
    'Minhas playlists' : 'Home'

    return (
      <Container>

        <PlayTrack
          trackInfo={this.state.trackInfo}
          setTrackInfo={this.trackInfo} />
        
        <button
        onClick={this.onClickSwitchPage}
        >{buttonTextSwitch}</button>
        {activePage}
        

      </Container>
    )
  }
}