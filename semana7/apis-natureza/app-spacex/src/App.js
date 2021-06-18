import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2vh;
`
const Header = styled.div`
  margin: 2% 0;
  
  h1{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 300;
    font-stretch:extra-condensed;
    letter-spacing: 10px;
    font-variant-caps: all-petite-caps;
    text-align: right;
    margin: 0 auto;
    color: #a7a9ac;
    background-color: #005288 }
`

const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 2vw;

    @media (max-width: 414px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
 `
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 20%;
  border: 1px solid lightgray;
  margin-bottom:1vh;

  @media (max-width: 414px) {
    max-width: 90%;
  }

    .ativo{
      color:darkgreen;
  }

  .inativo{
      color:darkred
  }

    .img{
      height: 10em;
      display: flex;
      justify-content: center;
      hyphens: auto;
    }
    div>img{
      width: 90%;
    }
    
    .infos{
      
    }

    .descricao{
      width: 90%;
      text-align: justify;
      min-height: 13em;
    }

    h4{
      margin-bottom: 1%;
    }

    li{
      list-style: none;
      line-height: 2em;
    }

`

const url = "https://api.spacexdata.com/v4/"

export default class App extends React.Component {

  state = {
    rockets: [],
  }

  componentDidMount() {
    this.getAllRockets()
  }

  getAllRockets = async () => {
    const params = 'rockets'
    const header = {}
    const body = {}

    try {
      const response = await axios.get(url + params, body, header)
      this.setState({
        rockets: response.data
      })
    } catch (error) { console.log(error) }

  }

  render() {

    console.log(this.state);

    const upcoming = this.state.rockets.map((rocket) => {
      return <ContainerCard key={rocket.id}>
        <h2>{rocket.name}</h2>
        {rocket.active ? <h3 className={"ativo"}>Status: Ativo</h3> : <h3 className={"inativo"}>Status: Inativo</h3>}
        <div className={"img"}><img alt={rocket.name} src={rocket.flickr_images[0]}></img></div>
        <p className={"descricao"}>{rocket.description}</p>

        <div className={"infos"}>
          <h4>Custo por Lançamento</h4>
          <li>USD {(rocket.cost_per_launch / 1000000).toFixed(2)}milhões</li>
          <h4>Specs</h4>
          <li>Peso: {(rocket.mass.kg / 1000).toFixed(2)}t </li>
          <li>Altura: {rocket.height.meters}m </li>
          <li>Diametro: {rocket.diameter.meters}m</li>
          <li>Qt. Motores: {rocket.engines.number}</li>
          <li>Apoios de Aterrissagem</li>
          <li>{rocket.landing_legs.number ? 'Qt.: ' + rocket.landing_legs.number : 'Não possui'}</li>
          <li>{rocket.landing_legs.material ? 'Material: ' + rocket.landing_legs.material : true}</li>
          <a href={rocket.wikipedia} target={"_blank"} rel={"noreferrer"}>+ informações </a>
        </div>
      </ContainerCard>
    })

    return (
      <Container>

        <Header>
          <img alt={"SpaceX"} src={"https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg"}></img>
          <h1>Foguetes</h1>
        </Header>

        <ContainerMain>
          {upcoming}
        </ContainerMain>
      </Container>
    )
  }

}