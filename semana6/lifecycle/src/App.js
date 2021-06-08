import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
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
      filtro: 'pendentes'
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
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
