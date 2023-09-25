import './intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
/* /import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numbers'
 */
function Intervalo(props) {
    const { min, max } = props

    return (
        <Card title="Intervalo de números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} readOnly /* onChange={e => props.alterarMinimo(+e.target.value)} */ />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} readOnly /* onChange={e => props.alterarMaximo(+e.target.value)}  *//>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProsps (state){
    return{
        min: state.numeros.min,
        max: state.numeros.max,

    }
}

export default connect (mapStateToProsps) (Intervalo)