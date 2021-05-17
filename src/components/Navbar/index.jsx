import styled from 'styled-components'
import CounterContext from "../../CounterStore";
import {useContext} from "react";

const NavBar = styled.div`
background: cornflowerblue;
flex: 1 1 100%;
min-height: 15vh;
padding:0 1rem;
display: flex;
justify-content: space-between;
`
export default function Navbar(){
    let {counterState} = useContext(CounterContext)
    return(
        <NavBar>
            <h1>Navbar</h1>
            <h1>{counterState.counterValue}</h1>
        </NavBar>
    )
}