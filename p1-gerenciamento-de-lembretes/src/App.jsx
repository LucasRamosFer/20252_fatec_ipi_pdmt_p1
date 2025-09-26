import React from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

class App extends React.Component {

  state = {
    lembretes: [],

  }
  removerLembrete = (id) => {
    const atualizarLembrete = this.state.lembretes.filter((lembrete) => lembrete.id !== id)
    this.setState({ lembretes: atualizarLembrete })
  }

  mudarFavorito = (id) => {
    const atualizarLembrete = this.state.lembretes.map((lembrete) => {
      if (lembrete.id === id) {
        return {
          id: lembrete.id,
          descricao: lembrete.descricao,
          favorito: !lembrete.favorito
        }
      }
      return lembrete
    })
    this.setState({ lembretes: atualizarLembrete})

  }

  componentDidMount() {
    const lembretesFicticios = [
      {
        id: 1,
        descricao: 'Preparar aula de programação',
        favorito: true
      },
      {
        id: 2,
        descricao: 'Fazer feira',
        favorito: false
      },
      {
        id: 3,
        descricao: 'Preparar Marmita',
        favorito: false
      }
    ]
    this.setState({ lembretes: lembretesFicticios })
  }
  render() {
    return (
      <div className="container border rounded my-2 p-3">
        <div className="row">
          {
            this.state.lembretes
            .map((lembrete) => (
              <div className="col-12">
                <LembreteLista
                  descricao={lembrete.descricao}
                  favorito={lembrete.favorito}
                  mudar={() => this.mudarFavorito(lembrete.id)}
                  remover={() => this.removerLembrete(lembrete.id)} />

              </div>
              
            ))
          }
        </div>
        <LembreteEntrada />
      </div>
    )

  }
}

export default App
