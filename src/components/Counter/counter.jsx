import {useContext} from "react";
import styled from "styled-components";
import CounterContext from "../../CounterStore";
const CounterWrapper = styled.div`
margin-top: 1rem;
display: flex;
align-items: center;
width: 25rem;
border-radius: .7rem;
background: coral;
height: 3rem;
justify-content: center;
gap: 1rem;
`
const ValueContainer = styled.span`
font-weight: bold;
color: white;
font-size: 27px;
`

export default function Counter(props){
    let {counterState, setCounterValue} = useContext(CounterContext)
    return (
            <CounterWrapper>
                <button onClick={()=> setCounterValue('decrement')}>-</button>
                <ValueContainer>{counterState.counterValue}</ValueContainer>
                <button onClick={()=>setCounterValue('increment')}>+</button>
                <button onClick={()=>setCounterValue('reset')}>Reset</button>
            </CounterWrapper>
    )
}