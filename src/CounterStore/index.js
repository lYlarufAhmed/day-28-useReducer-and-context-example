import {createContext, useReducer} from 'react'


let CounterContext = createContext({
    counterState: {},
    setCounterValue: () => {
    }
})


// eslint-disable-next-line no-undef
export default CounterContext


export function CounterContextProvider(props) {
    const initialState = {counterValue: 0}

    function reducer(state, action) {
        switch (action) {
            case 'increment':
                return {counterValue: state.counterValue + 1}
            case 'decrement':
                return {counterValue: state.counterValue - 1}
            case 'reset':
                return {counterValue: 0}
            default:
                throw new Error('Wrong this')
        }
    }

    let [counterState, setCounterValue] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={{
            counterState,
            setCounterValue
        }}>
            {props.children}
        </CounterContext.Provider>
    )
}


