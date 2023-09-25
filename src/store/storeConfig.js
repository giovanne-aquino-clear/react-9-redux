import {createStore, combineReducers} from 'redux'
/* import numbersReducer from './reducers/numbers.js'
 */
const reducers = combineReducers({
    numeros: function(state, action){
        return{
            min: 1,
            max: 190
        }
    },
    nomes: function (state,action) {
        return[
            'Ana',
            'Amor',
            'da minha vida'
        ]
    }
}) 

 function storeConfig() {
    return createStore(reducers)
}

export default storeConfig  