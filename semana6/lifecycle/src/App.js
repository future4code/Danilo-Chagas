import React from 'react'
import styled from 'styled-components'
import './styles.css'
import Tarefa from '../src/component/Tarefa'


const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-bottom: 2vh;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
        id: 1,
        texto: 'Texto da tarefa',
        completa: false
      },
        {
        id: 2,
        texto: 'Texto da segunda tarefa',
        completa: true
        }
    ],
      inputValue: '',
      filtro: 'pendentes',
      enquantoEdita: false,
      inputValueEditado:"",
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas',JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasSalvas = localStorage.getItem('tarefas')
    const arrayTarefas = JSON.parse(tarefasSalvas)
    if(arrayTarefas) {
      this.setState({tarefas: arrayTarefas})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const incluiTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    this.setState({tarefas: [...this.state.tarefas,incluiTarefa]})
    this.setState({inputValue: ""})

  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa)=>{
      if(tarefa.id === id) {
        const alteraStatus = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return alteraStatus
      } else {
        return tarefa
      }     
    }) 

    this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  excluirTarefa = (id) => {   
    const novoArraySemItem = this.state.tarefas.filter((tarefa)=>{
      return tarefa.id !== id
    })
    return this.setState({tarefas: novoArraySemItem})
  }

  editarTarefa = (id) => {
    
    //usar splice com substituição,ex:
    // const array = {p:[{1:1},{2:2},{3:3}]}
    // const altera = (input) => {return array.p.splice(array.p.indexOf(input),1,{4:4})}
    // altera(1)
    // console.log(array)


    //  tarefaEditada = {
    //   id: this.state.id,
    //   texto: this.state.inputValue,
    //   completa: this.state.completa
    // }
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
 

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        
        
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                texto={tarefa.texto}               
                deletar={() => this.excluirTarefa(tarefa.id)}
                botaoEdicao={() => this.editarTarefa(tarefa.id)}
                campoEdicao={this.enquantoEdita}

              />                
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
