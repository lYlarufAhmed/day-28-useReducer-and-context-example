import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import Content from "../Content";
import styled from 'styled-components'
import {CounterContextProvider} from "../../CounterStore";

const FlexContainer = styled.section`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
`

function Home() {
    return (
        <CounterContextProvider>
            <FlexContainer>
                <Navbar/>
                <SideBar>
                    <h2>Link1</h2>
                    <h2>Link2</h2>
                    <h2>Link3</h2>
                </SideBar>
                <Content/>
            </FlexContainer>
        </CounterContextProvider>

    );
}

export default Home;
