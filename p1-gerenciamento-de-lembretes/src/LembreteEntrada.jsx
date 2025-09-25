const LembreteEntrada = () => {
    const aoClicar = () => alert('lembrete cadastrado')
    return (
        <div className="container">
                <input
                    className="w-100 mt-2"
                    type="text"
                    id="descricaoLembrete"
                />
                <button
                    className='btn btn-outline-primary w-100 mt-2'
                    onClick={() => aoClicar()}>
                    Ok
                </button>
        </div>
    )
}

export default LembreteEntrada