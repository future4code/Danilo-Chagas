import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`
const url = "https://api.spacexdata.com/v4/"

export default class App extends React.Component {
  
  state = {
    nextLaunch: []
  }
  
  componentDidMount(){
    this.getUpcomingLaunch()
  }

  getUpcomingLaunch = async () => {
    const params = "launches/upcoming"
    const header = {}
    const body = {}

    try {
        const response = await axios.get(url+params,body,header)
        console.log(response.data)
        this.setState({
          nextLaunch: response.data
        }) 
      } catch (error) {console.log(error)}

      }

  render () {

    const upcoming = this.state.nextLaunch.map((item)=>{
      return <div key={item.id}>
        <li>{item.rocket}</li>
        <li>{item.name}</li>
      </div>
    })

    return (
      <Container>
          <h1>SpaceX Launches</h1>
          
          <div>
          <h3>Próximo</h3>
          <h6>{upcoming}</h6>
          </div>
          
          <div>
          <h3>Último</h3>
          <h6>Dados</h6>
          </div>
          
          <div>
          <h3>Anteriores</h3>
          <h6>Dados</h6>
          </div>
      </Container>
    )
  }

}