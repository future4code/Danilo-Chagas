import React from 'react'

export default class DetailPlaylist extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.playlistDetail.name}</h1>
            </div>
        )
    }

}