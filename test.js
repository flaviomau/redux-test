const redux = require('redux')

function counterReducer(state = 0, action){
    switch(action.type){
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
    }
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