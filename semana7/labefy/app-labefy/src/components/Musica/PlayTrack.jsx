import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("chrome://global/skin/media/imagedoc-darknoise.png");
    background-color: rgba(26,26,26,.8);
`

const TrackInfo = styled.div`
    display: flex;
    color: white;
    gap: 2vw;
`
const ContainerPlayerAndCloseButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
`

const Player = styled.audio`
    flex-grow: 1;
    min-width: 80vw;
`

 const CloseButton = styled.div`
    background-image: url("https://fonts.gstatic.com/s/i/materialicons/cancel/v14/24px.svg");
    background-position:center;
    background-repeat: no-repeat;
    filter:invert();
    min-height: 24px;
    min-width: 24px;
    border: 0px;
        :hover,:focus{
            opacity: 90%;
            cursor: pointer;
            filter: invert(58%) sepia(64%) saturate(2438%) hue-rotate(186deg) brightness(99%) contrast(95%);
            :active{
                background-size: 22px;
            }
        }
`

export default class PlayTrack extends React.Component {
    state = {
        track: []
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            return this.setState({
                track: this.props.trackInfo
            })
        } else {
            return false
        }
    }

    closePlayer = () => {
        this.props.setTrackInfo("")
    }

    render() {
        const player = this.state.track.id ?
            <Container>
                <TrackInfo>
                    <h4>{this.state.track.name}  |  {this.state.track.artist}</h4>
                </TrackInfo>

            <ContainerPlayerAndCloseButton>
                <CloseButton onClick={this.closePlayer}/>
                <Player src={this.state.track.url} controls autoPlay />
            </ContainerPlayerAndCloseButton>    
            
            </Container>
            :
            <div></div>

        return (
            <div>{player}</div>
        )
    }

}