import React from 'react'

const LembreteLista = (props) => {
    return (
        <div className="card">
            <div className="card-body d-flex">
                <div className="flex-grow-1 ms-2 border p-1">
                    <h4 className='text-center'>{props.descricao}</h4>
                </div>
                <div className="p-2">
                    <button className='btn btn-outline-primary w-100 mt-2'>
                        <i className={`fa-${props.icone} fa-star`}></i>
                        
                    </button>
                </div>
                <div className="p-2">
                    <button className='btn btn-outline-primary w-100 mt-2'>
                        <i className={'fa-solid fa-trash'}></i>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default LembreteLista