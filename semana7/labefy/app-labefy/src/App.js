import React from "react"
import ListPlaylist from './components/Playlist/ListPlaylist'
import PlayTrack from "./components/Musica/PlayTrack"

export default class App extends React.Component {
 state = {
   trackInfo: [],
 }
 
 trackInfo = (info) => {
   this.setState({
     trackInfo: info
   })
 }

  render () {
   return (
     <div>
     
       <h1>Labefy</h1>
     
      <button>Playlist</button>
      <br/>
      <button>Buscar Música</button>
      <ListPlaylist
      catchTrackInfo={this.trackInfo}
      />
     <PlayTrack
     trackInfo={this.state.trackInfo}/>
     </div>
   )
 }
}