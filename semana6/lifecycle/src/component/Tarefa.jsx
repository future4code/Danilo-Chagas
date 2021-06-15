import React from "react"
import styled from "styled-components"


const ContainerItem = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2em;
  border-bottom: 1px solid lightgray;
  margin-bottom: 1vh;
  `
const Item = styled.li`
text-align: left;
text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
min-width: 100%;
font-size: 1em;
`

const Delete = styled.div`
    background-image: url("https://fonts.gstatic.com/s/i/materialicons/delete/v13/24px.svg");
    background-position:center;
    background-repeat: no-repeat;
    min-height: 24px;
    min-width: 24px;
    border: 0px;
    float:right;
    opacity: 50%;
        :hover,:focus{
            opacity: 100%;
            cursor: pointer;
            :active{
                background-size: 22px;
            }
        }

`

export default class Tarefas extends React.Component{

    render(){

        return(
            <ContainerItem>
                <Item
                completa={this.props.completa}
                onClick={this.props.onClick}
                >{this.props.texto}</Item>
                <Delete onClick={this.props.deletar}/>
            </ContainerItem>
        )
    }
}
