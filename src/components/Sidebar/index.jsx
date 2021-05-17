import styled from 'styled-components'


const Sidebar = styled.div`
flex: 1 1 10%;
max-width: 20vw;
background: pink;
padding-left: 1rem;
min-height: 85vh;
`

export default function SideBar(props){
    return (
        <Sidebar>
            <h1>SideBar</h1>
            {props.children}
        </Sidebar>
    )
}