const redux = require('redux')

function counterReducer(state = 0, action){
    console.log(action)
    return state
}

function storeChanged(){
    console.log(store.getState())
}

const store = redux.createStore(counterReducer)
store.subscribe(storeChanged)

const increment = { type: 'INCREMENT' }
const decrement = { type: 'DECREMENT' }

store.dispatch(increment)
store.dispatch(decrement)