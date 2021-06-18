import React from "react"
import ListPlaylist from './components/Playlist/ListPlaylist'

export default class App extends React.Component {
 render () {
   return (
     <div>
     
       <h1>Labefy</h1>
     
      <button>Playlist</button>
      <br/>
      <button>Buscar Música</button>
      <ListPlaylist/>
     </div>
   )
 }
}