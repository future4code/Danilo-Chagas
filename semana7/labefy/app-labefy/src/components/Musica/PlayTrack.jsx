import React from 'react'

export default class PlayTrack extends React.Component {
state = {
    track: []
}

componentDidMount(){

}

componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
        return this.setState({
            track: this.props.trackInfo
        })
    } else {
        return false }
}

    render () {
        const player = this.state.track.id ?
        <div>
        <div>
            <p>{this.state.track.name}</p>
            <p>{this.state.track.artist}</p>
        </div>
        <audio src={this.state.track.url} controls autoPlay>
        </audio>
        </div>
        :
        <div><h1>sem props</h1></div>
        
        return (
            <div>                
            {player}
            </div>
        )
    }

}