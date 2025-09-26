import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

const App = () => {
  const lembretes = [
    {
      id:1,
      descricao: 'Preparar aula de programação',
      favorito: false,
      icone:'solid'
    },
    {
      id:2,
      descricao: 'Fazer feira',
      favorito: false,
      icone:'regular'
    },
        {
      id:3,
      descricao: 'Preparar Marmita',
      favorito: false,
      icone:'regular'
    }
  ]

  return ( 
    <div className="container border rounded my-2 p-3">
      <div className="row">
        {
          lembretes.map((lembrete) => (
            <div className="col-12">
              <LembreteLista 
                descricao={lembrete.descricao}
                icone={lembrete.icone} />
            </div>

            
            
          ))
        }

      </div>
      <LembreteEntrada />
    </div>
  )
}

export default App
